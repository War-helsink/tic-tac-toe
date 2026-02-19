import type { Metadata } from "next";
import { UserGamesList } from "@/features/games-list";

export const metadata: Metadata = {
	title: "Games played",
	description: "Games played",
};

const GamesPage: React.FC = async () => {
	return <UserGamesList />;
};

export default GamesPage;
