import type { Metadata } from "next";
import { Game } from "@/features/game";

export const metadata: Metadata = {
	title: "Game",
	description: "Game",
};

interface GamePageProps {
	params: Promise<{ id: string }>;
}

const GamePage: React.FC<GamePageProps> = async ({ params }) => {
	const { id } = await params;

	return (
		<main className="flex flex-col grow pt-24 w-full max-w-[400px] mx-auto">
			<Game gameId={id} />
		</main>
	);
};

export default GamePage;
