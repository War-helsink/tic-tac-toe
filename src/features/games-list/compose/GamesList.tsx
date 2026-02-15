import { getIdleGames } from "@/entities/game/server";
import { GamesListClient } from "./GamesListClient";

export const GamesList: React.FC = async () => {
	const games = await getIdleGames();

	return <GamesListClient games={games} />;
};
