"use server";

import { redirect } from "next/navigation";
import { createGame } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { error } from "@/shared/lib/either";
import { routes } from "@/shared/config";

export async function createGameAction() {
	const user = await getCurrentUser();

	if (!user) {
		return error("user-not-found" as const);
	}

	const gameResult = await createGame(user);

	if (gameResult.type === "successful") {
		redirect(routes.game(gameResult.value.id));
	}

	return gameResult;
}
