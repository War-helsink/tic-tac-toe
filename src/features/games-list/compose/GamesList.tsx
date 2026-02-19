import { Suspense } from "react";
import { getIdleGames } from "@/entities/game/server";
import { sessionService } from "@/entities/user/server";
import { Spinner } from "@/shared/ui";
import { GamesListClient } from "./GamesListClient";
import { CreateButton } from "../ui/CreateButton";
import { Layout } from "../ui/Layout";

export const GamesList: React.FC = async () => {
	const { session } = await sessionService.verifySession();
	const gamesPromise = getIdleGames();

	return (
		<Layout actions={<CreateButton />}>
			<Suspense
				fallback={
					<div className="absolute w-full h-full flex justify-center items-center">
						<Spinner className="size-8" />
					</div>
				}
			>
				<GamesListClient gamesPromise={gamesPromise} session={session} />
			</Suspense>
		</Layout>
	);
};
