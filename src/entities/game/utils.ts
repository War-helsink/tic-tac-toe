import { error, successful } from "@/shared/lib/either";
import {
	type Field,
	type PlayerEntity,
	type GameOverEntity,
	type GameOverDrawEntity,
	type GameInProgressEntity,
	GameSymbol,
} from "./types";

export const getGameCurrentSymbol = (
	game: GameInProgressEntity | GameOverEntity | GameOverDrawEntity,
) => {
	const sybmolds = game.field.filter((s) => s !== null).length;

	return sybmolds % 2 === 0 ? GameSymbol.X : GameSymbol.O;
};

export const getNextSymbol = (sameSymbol: GameSymbol) => {
	if (sameSymbol === GameSymbol.X) {
		return GameSymbol.O;
	}
	return GameSymbol.X;
};

export const getPlayerSymbol = (
	player: PlayerEntity,
	game: GameInProgressEntity | GameOverEntity,
) => {
	const index = game.players.findIndex((p) => p.id === player.id);

	return { 0: GameSymbol.X, 1: GameSymbol.O }[index];
};

export const doStep = ({
	game,
	index,
	player,
}: {
	game: GameInProgressEntity;
	index: number;
	player: PlayerEntity;
}) => {
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
		} satisfies GameOverEntity);
	}

	if (isDraw(newField)) {
		return successful({
			...game,
			field: newField,
			status: "gameOverDraw",
		} satisfies GameOverDrawEntity);
	}

	return successful({
		...game,
		field: newField,
	} satisfies GameInProgressEntity);
};

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
