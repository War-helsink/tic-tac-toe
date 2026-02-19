"use client";

import { use } from "react";
import Link from "next/link";
import type { GameIdleEntity } from "@/entities/game";
import type { SessionEntity } from "@/entities/user";
import { useEventsSource } from "@/shared/lib/sse/client";
import { routes } from "@/shared/config";
import { Button } from "@/shared/ui";
import { GameCard } from "../ui/GameCard";

interface GamesListClientProps {
	session: SessionEntity;
	gamesPromise: Promise<GameIdleEntity[]>;
}

export const GamesListClient: React.FC<GamesListClientProps> = ({
	session,
	gamesPromise,
}) => {
	const games = use(gamesPromise);
	const { dataStream: gamesStream = games } = useEventsSource<GameIdleEntity[]>(
		routes.gamesStream(),
	);

	return gamesStream.map((game) => (
		<GameCard
			key={game.id}
			login={game.creator.login}
			rating={game.creator.rating}
			creatorId={game.creator.id}
			currentUserId={session.id}
			actions={
				<Link href={routes.game(game.id)}>
					<Button>Connect</Button>
				</Link>
			}
		/>
	));
};
