import { redirect } from "next/navigation";
import { getCurrentUser } from "@/entities/user/server";
import { getGameById, startGame } from "@/entities/game/server";
import type { GameId } from "@/shared/types";
import { GameClient } from "./GameClient";

interface GameProps {
	gameId: GameId;
}

export const Game: React.FC<GameProps> = async ({ gameId }) => {
	const user = await getCurrentUser();

	let game = await getGameById(gameId);

	if (!game || !user) {
		redirect("/");
	}

	if (user) {
		const startGameResult = await startGame(gameId, user);

		if (startGameResult.type === "successful") {
			game = startGameResult.value;
		}
	}

	return <GameClient defaultGame={game} player={user} />;
};
