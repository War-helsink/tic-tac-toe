import cuid from "cuid";
import type { GameId } from "@/shared/types";
import { error, successful } from "@/shared/lib/either";
import { gameRepositoryApi } from "./repositories";
import type { GameIdleEntity, PlayerEntity } from "../types";
import { doStep } from "../utils";
import { gameEvents } from "../server";

export const getGameById = (gameId: GameId) => {
	return gameRepositoryApi.getGame({ id: gameId });
};

export async function getIdleGames(): Promise<GameIdleEntity[]> {
	return gameRepositoryApi.gamesList({
		status: "idle",
	}) as Promise<GameIdleEntity[]>;
}

export async function createGame(player: PlayerEntity) {
	const playerGames = await gameRepositoryApi.gamesList({
		players: {
			some: {
				user: {
					id: player.id,
				},
			},
		},
		status: "idle",
	});

	const isGameInIdleStatus = playerGames.some(
		(game) => game.status === "idle" && game.creator.id === player.id,
	);

	if (isGameInIdleStatus) {
		return error("can-create-only-one-game");
	}

	const createdGame = await gameRepositoryApi.createGame({
		id: cuid(),
		creator: player,
		status: "idle",
		field: Array(9).fill(null),
	});

	await gameEvents.emit({
		type: "game-created",
	});

	return successful(createdGame);
}

export async function startGame(gameId: GameId, player: PlayerEntity) {
	const game = await gameRepositoryApi.getGame({ id: gameId });
	if (!game) {
		return error("game-not-found" as const);
	}

	if (game.status !== "idle") {
		return error("game-status-not-idle" as const);
	}

	if (game.creator.id === player.id) {
		return error("creator-can-not-start-game" as const);
	}

	const newGame = await gameRepositoryApi.startGame(gameId, player);

	await gameEvents.emit({
		type: "game-changed",
		data: newGame,
	});

	return successful(newGame);
}

export async function stepGame(
	gameId: GameId,
	player: PlayerEntity,
	index: number,
) {
	const game = await gameRepositoryApi.getGame({ id: gameId });
	if (!game) {
		return error("game-not-found");
	}

	if (game.status !== "inProgress") {
		return error("game-is-not-in-progress");
	}

	if (!game.players.some((p) => p.id === player.id)) {
		return error("player-is-not-in-game");
	}

	const stepResult = doStep({ game, index, player });

	if (stepResult.type === "error") {
		return stepResult;
	}

	const newGame = await gameRepositoryApi.saveGame(stepResult.value);

	await gameEvents.emit({
		type: "game-changed",
		data: newGame,
	});

	return successful(newGame);
}

export async function surrenderGame(gameId: GameId, player: PlayerEntity) {
	const game = await gameRepositoryApi.getGame({ id: gameId });
	if (!game) {
		return error("game-not-found" as const);
	}

	if (game.status !== "inProgress") {
		return error("game-is-not-in-progress" as const);
	}

	if (!game.players.some((p) => p.id === player.id)) {
		return error("player-is-not-in-game" as const);
	}

	const newGame = await gameRepositoryApi.saveGame({
		...game,
		status: "gameOver",
		winner: game.players.find((p) => p.id !== player.id)!,
	});

	await gameEvents.emit({
		type: "game-changed",
		data: newGame,
	});

	return successful(newGame);
}
