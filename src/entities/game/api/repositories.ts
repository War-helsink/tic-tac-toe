import { z } from "zod";
import type {
	Prisma,
	Game,
	GamePlayer,
	User,
	RatingChange,
} from "@/generated/client";
import { prisma } from "@/shared/lib/prisma";
import type { AvatarConfig, GameId } from "@/shared/types";
import type {
	GameEntity,
	GameIdleEntity,
	GameInProgressEntity,
	GameOverDrawEntity,
	GameOverEntity,
	PlayerEntity,
	RatingChangeEntity,
} from "../types";
import { calculateElo } from "../utils";

const gameInclude = {
	winner: { include: { user: true } },
	players: { include: { user: true } },
	ratingChanges: true,
};

interface GamesListProps {
	orderBy?: Prisma.GameOrderByWithAggregationInput;
	take?: number;
	skip?: number;
	where?: Prisma.GameWhereInput;
}

async function gamesList({
	where,
	take,
	skip,
	orderBy,
}: GamesListProps): Promise<GameEntity[]> {
	const games = await prisma.game.findMany({
		where,
		take,
		skip,
		orderBy,
		include: gameInclude,
	});

	return games.map(dbGameToGameEntity);
}

async function startGame(gameId: GameId, player: PlayerEntity) {
	return dbGameToGameEntity(
		await prisma.game.update({
			where: { id: gameId },
			data: {
				players: {
					create: {
						userId: player.id,
						index: 1,
					},
				},
				status: "inProgress",
			},
			include: gameInclude,
		}),
	);
}

async function saveGame(
	game:
		| Omit<GameInProgressEntity, "createdAt">
		| Omit<GameOverEntity, "createdAt" | "ratingChanges">
		| Omit<GameOverDrawEntity, "createdAt" | "ratingChanges">,
) {
	return prisma.$transaction(async (tx) => {
		if (game.status === "gameOver" || game.status === "gameOverDraw") {
			const alreadyCalculated = await tx.ratingChange.findFirst({
				where: { gameId: game.id },
			});

			if (alreadyCalculated) {
				throw new Error("Rating already calculated for this game");
			}

			const [player1, player2] = game.players;

			let newRatings: {
				player1: number;
				player2: number;
			};

			if (game.status === "gameOver") {
				const winnerId = game.winner.id;

				if (player1.id === winnerId) {
					newRatings = calculateElo(player1.rating, player2.rating, "win");
				} else {
					newRatings = calculateElo(player2.rating, player1.rating, "win");

					newRatings = {
						player1: newRatings.player2,
						player2: newRatings.player1,
					};
				}
			} else {
				newRatings = calculateElo(player1.rating, player2.rating, "draw");
			}

			const delta1 = newRatings.player1 - player1.rating;
			const delta2 = newRatings.player2 - player2.rating;

			await tx.user.update({
				where: { id: player1.id },
				data: { rating: newRatings.player1 },
			});

			await tx.user.update({
				where: { id: player2.id },
				data: { rating: newRatings.player2 },
			});

			await tx.ratingChange.createMany({
				data: [
					{
						gameId: game.id,
						userId: player1.id,
						ratingBefore: player1.rating,
						ratingAfter: newRatings.player1,
						delta: delta1,
					},
					{
						gameId: game.id,
						userId: player2.id,
						ratingBefore: player2.rating,
						ratingAfter: newRatings.player2,
						delta: delta2,
					},
				],
			});
		}

		let winnerGamePlayerId: string | undefined;

		if (game.status === "gameOver") {
			const winnerPlayer = await tx.gamePlayer.findFirstOrThrow({
				where: {
					gameId: game.id,
					userId: game.winner.id,
				},
			});

			winnerGamePlayerId = winnerPlayer.id;
		}

		const updatedGame = await tx.game.update({
			where: { id: game.id },
			data: {
				status: game.status,
				field: game.field,
				winnerId: winnerGamePlayerId,
				gameOverAt: "gameOverAt" in game ? game.gameOverAt : null,
			},
			include: gameInclude,
		});

		return dbGameToGameEntity(updatedGame);
	});
}

async function getGame(where?: Prisma.GameWhereInput) {
	const game = await prisma.game.findFirst({
		where,
		include: gameInclude,
	});

	if (game) {
		return dbGameToGameEntity(game);
	}
	return undefined;
}

async function createGame(
	game: Omit<GameIdleEntity, "createdAt">,
): Promise<GameEntity> {
	const createdGame = await prisma.game.create({
		data: {
			status: game.status,
			id: game.id,
			field: game.field,
			players: {
				create: {
					index: 0,
					userId: game.creator.id,
				},
			},
		},
		include: gameInclude,
	});

	return dbGameToGameEntity(createdGame);
}

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity(
	game: Game & {
		players: Array<GamePlayer & { user: User }>;
		winner?: (GamePlayer & { user: User }) | null;
		ratingChanges?: RatingChange[];
	},
): GameEntity {
	const players = game.players
		.sort((a, b) => a.index - b.index)
		.map(dbPlayerToPlayer);

	switch (game.status) {
		case "idle": {
			const [creator] = players;
			if (!creator) {
				throw new Error("creator shoud be in game idle");
			}
			return {
				id: game.id,
				creator,
				status: game.status,
				field: fieldSchema.parse(game.field),
				createdAt: game.createdAt,
			} satisfies GameIdleEntity;
		}
		case "inProgress": {
			return {
				id: game.id,
				players,
				status: game.status,
				field: fieldSchema.parse(game.field),
				createdAt: game.createdAt,
			};
		}
		case "gameOverDraw": {
			if (!game.ratingChanges) {
				throw new Error("winner shoud be in game over");
			}
			return {
				id: game.id,
				players,
				status: game.status,
				field: fieldSchema.parse(game.field),
				ratingChanges: game.ratingChanges.map((ratingChange) =>
					dbRatingToRating(ratingChange),
				),
				gameOverAt: game.gameOverAt,
				createdAt: game.createdAt,
			};
		}
		case "gameOver": {
			if (!game.winner || !game.ratingChanges) {
				throw new Error("winner shoud be in game over");
			}
			return {
				id: game.id,
				players,
				status: game.status,
				field: fieldSchema.parse(game.field),
				winner: dbPlayerToPlayer(game.winner),
				ratingChanges: game.ratingChanges.map((ratingChange) =>
					dbRatingToRating(ratingChange),
				),
				gameOverAt: game.gameOverAt,
				createdAt: game.createdAt,
			} satisfies GameOverEntity;
		}
	}
}

export function dbPlayerToPlayer(
	db: GamePlayer & { user: User },
): PlayerEntity {
	return {
		id: db.user.id,
		login: db.user.login,
		rating: db.user.rating,
		avatar: db.user.avatar as Required<AvatarConfig>,
	};
}

export function dbRatingToRating(db: RatingChange): RatingChangeEntity {
	return {
		userId: db.userId,
		ratingBefore: db.ratingBefore,
		ratingAfter: db.ratingAfter,
		delta: db.delta,
	};
}

export const gameRepositoryApi = {
	gamesList,
	createGame,
	getGame,
	startGame,
	saveGame,
};
