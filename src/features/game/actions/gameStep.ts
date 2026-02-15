"use server";

import { stepGame } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { error } from "@/shared/lib/either";
import type { GameId } from "@/shared/types";

export const gameStepAction = async ({
	index,
	gameId,
}: {
	gameId: GameId;
	index: number;
}) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return error("not-found");
	}

	return await stepGame(gameId, currentUser, index);
};
