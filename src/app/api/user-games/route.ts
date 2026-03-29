import { NextResponse } from "next/server";
import { getUserGamesPage } from "@/entities/game/server";
import { sessionService } from "@/entities/user/server";

export async function GET(req: Request) {
	const { session } = await sessionService.verifySession();

	const { searchParams } = new URL(req.url);
	const cursor = searchParams.get("cursor") ?? undefined;

	const page = await getUserGamesPage(session.id, cursor);

	return NextResponse.json(page);
}

