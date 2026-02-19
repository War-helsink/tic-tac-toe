import { Suspense } from "react";
import { getUserGames } from "@/entities/game/server";
import { sessionService } from "@/entities/user/server";
import { Spinner } from "@/shared/ui";
import { CompletedGameCard } from "../ui/CompletedGameCard";

export const UserGamesList: React.FC = () => {
	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex justify-center items-center">
					<Spinner className="size-8" />
				</div>
			}
		>
			<GamesList />
		</Suspense>
	);
};

const GamesList: React.FC = async () => {
	const { session } = await sessionService.verifySession();
	const games = await getUserGames(session.id);

	return (
		<div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
			{games.map((game) => (
				<CompletedGameCard
					key={game.id}
					game={game}
					currentUserId={session.id}
				/>
			))}
		</div>
	);
};
