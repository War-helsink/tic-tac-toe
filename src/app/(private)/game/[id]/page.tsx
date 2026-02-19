import type { Metadata } from "next";
import { Suspense } from "react";
import { Game } from "@/features/game";
import { Spinner } from "@/shared/ui";

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
		<main className="w-full flex flex-col grow">
			<Suspense
				fallback={
					<div className="w-full h-full flex justify-center items-center">
						<Spinner className="size-8" />
					</div>
				}
			>
				<Game gameId={id} />
			</Suspense>
		</main>
	);
};

export default GamePage;
