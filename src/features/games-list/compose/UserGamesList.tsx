import { Suspense } from "react";
import { getUserGamesPage } from "@/entities/game/server";
import { sessionService } from "@/entities/user/server";
import { Spinner } from "@/shared/ui";
import { UserGamesListClient } from "./UserGamesListClient";

export const UserGamesList: React.FC = async () => {
	const { session } = await sessionService.verifySession();
	const firstPagePromise = getUserGamesPage(session.id);

	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex justify-center items-center">
					<Spinner className="size-8" />
				</div>
			}
		>
			<UserGamesListClient
				currentUserId={session.id}
				firstPagePromise={firstPagePromise}
			/>
		</Suspense>
	);
};
