import { error, successful } from "@/shared/lib/either";
import type { UserId } from "@/shared/types";
import {
	type Field,
	type PlayerEntity,
	type GameOverEntity,
	type GameOverDrawEntity,
	type GameInProgressEntity,
	type RatingChangeEntity,
	GameSymbol,
} from "./types";

export function getGameCurrentSymbol(
	game: GameInProgressEntity | GameOverEntity | GameOverDrawEntity,
) {
	const sybmolds = game.field.filter((s) => s !== null).length;

	return sybmolds % 2 === 0 ? GameSymbol.X : GameSymbol.O;
}

export function getNextSymbol(sameSymbol: GameSymbol) {
	if (sameSymbol === GameSymbol.X) {
		return GameSymbol.O;
	}
	return GameSymbol.X;
}

export const getPlayerSymbol = (
	player: PlayerEntity,
	game: GameInProgressEntity | GameOverEntity,
) => {
	const index = game.players.findIndex((p) => p.id === player.id);

	return { 0: GameSymbol.X, 1: GameSymbol.O }[index];
};

export function doStep({
	game,
	index,
	player,
}: {
	game: GameInProgressEntity;
	index: number;
	player: PlayerEntity;
}) {
	const currentSymbol = getGameCurrentSymbol(game);

	if (currentSymbol !== getPlayerSymbol(player, game)) {
		return error("not-player-symbol");
	}

	if (game.field[index]) {
		return error("game-cell-allready-has-symbol");
	}

	const newField = game.field.map((cell, i) =>
		i === index ? currentSymbol : cell,
	);

	if (calculateWinner(newField)) {
		return successful({
			...game,
			field: newField,
			winner: player,
			status: "gameOver",
			ratingChanges: createRatingChanges(game.players, "win", player.id),
			gameOverAt: new Date(),
		} satisfies GameOverEntity);
	}

	if (isDraw(newField)) {
		return successful({
			...game,
			field: newField,
			status: "gameOverDraw",
			ratingChanges: createRatingChanges(game.players, "draw"),
			gameOverAt: new Date(),
		} satisfies GameOverDrawEntity);
	}

	return successful({
		...game,
		field: newField,
	} satisfies GameInProgressEntity);
}

function isDraw(squares: Field) {
	const winner = calculateWinner(squares);

	if (!winner) {
		return squares.every((s) => s !== null);
	}

	return false;
}

function calculateWinner(squares: Field) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

function createRatingChanges(
	players: PlayerEntity[],
	result: "win" | "lose" | "draw",
	winnerId?: UserId,
): RatingChangeEntity[] {
	const [p1, p2] = players;

	if (!p1 || !p2) return [];

	let eloResult: "win" | "lose" | "draw";

	if (result === "draw") {
		eloResult = "draw";
	} else {
		eloResult = winnerId === p1.id ? "win" : "lose";
	}

	const { player1, player2 } = calculateElo(p1.rating, p2.rating, eloResult);

	return [
		{
			userId: p1.id,
			ratingBefore: p1.rating,
			ratingAfter: player1,
			delta: player1 - p1.rating,
		},
		{
			userId: p2.id,
			ratingBefore: p2.rating,
			ratingAfter: player2,
			delta: player2 - p2.rating,
		},
	];
}

export function calculateElo(
	rating1: number,
	rating2: number,
	result: "win" | "lose" | "draw",
	k = 32,
) {
	const expected1 = 1 / (1 + Math.pow(10, (rating2 - rating1) / 400));
	const expected2 = 1 / (1 + Math.pow(10, (rating1 - rating2) / 400));

	let score1: number;
	let score2: number;

	if (result === "win") {
		score1 = 1;
		score2 = 0;
	} else if (result === "lose") {
		score1 = 0;
		score2 = 1;
	} else {
		score1 = 0.5;
		score2 = 0.5;
	}

	return {
		player1: Math.round(rating1 + k * (score1 - expected1)),
		player2: Math.round(rating2 + k * (score2 - expected2)),
	};
}
