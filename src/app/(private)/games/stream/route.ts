"use server";

import type { NextRequest } from "next/server";

import { gameEvents, getIdleGames } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { sseStream } from "@/shared/lib/sse/server";

export async function GET(req: NextRequest) {
	const user = await getCurrentUser();

	if (!user) {
		return new Response(`Game not found`, {
			status: 404,
		});
	}

	const { addCloseListener, response, write } = sseStream(req);

	write(await getIdleGames());

	addCloseListener(
		await gameEvents.addGameCreatedListener(async () => {
			write(await getIdleGames());
		}),
	);

	return response;
}
