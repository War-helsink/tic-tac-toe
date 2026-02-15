import type { GameId } from "../types";

export const routes = {
	root: () => `/` as const,
	signIn: () => `/sign-in` as const,
	signUp: () => `/sign-up` as const,
	termsOfService: () => `/policy/terms-of-service` as const,
	privacyPolicy: () => `/policy/privacy-policy` as const,
	game: (gameId: GameId) => `/game/${gameId}` as const,
	gameStream: (gameId: GameId) => `/game/${gameId}/stream` as const,
	gamesStream: () => `/games/stream` as const,
};
