import type { AvatarConfig, GameId, UserId } from "@/shared/types";

export type GameEntity =
	| GameIdleEntity
	| GameInProgressEntity
	| GameOverEntity
	| GameOverDrawEntity;

export type GameIdleEntity = {
	id: GameId;
	creator: PlayerEntity;
	field: Field;
	status: "idle";
	createdAt: Date;
};

export type GameInProgressEntity = {
	id: GameId;
	players: PlayerEntity[];
	field: Field;
	status: "inProgress";
	createdAt: Date;
};

export type GameOverEntity = {
	id: GameId;
	players: PlayerEntity[];
	field: Field;
	status: "gameOver";
	winner: PlayerEntity;
	ratingChanges: RatingChangeEntity[];
	gameOverAt: Date | null;
	createdAt: Date;
};

export type GameOverDrawEntity = {
	id: GameId;
	players: PlayerEntity[];
	field: Field;
	status: "gameOverDraw";
	ratingChanges: RatingChangeEntity[];
	gameOverAt: Date | null;
	createdAt: Date;
};

export type PlayerEntity = {
	id: UserId;
	login: string;
	rating: number;
	avatar: Required<AvatarConfig>;
};

export type RatingChangeEntity = {
	userId: UserId;
	ratingBefore: number;
	ratingAfter: number;
	delta: number;
};

export type Field = (GameSymbol | null)[];
export type GameSymbol = string;

export const GameSymbol = {
	X: "X",
	O: "O",
};
