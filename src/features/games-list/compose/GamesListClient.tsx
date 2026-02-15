"use client";

import Link from "next/link";
import type { GameIdleEntity } from "@/entities/game";
import { useEventsSource } from "@/shared/lib/sse/client";
import { routes } from "@/shared/config";
import { Button } from "@/shared/ui";
import { GameCard } from "../ui/GameCard";
import { CreateButton } from "../ui/CreateButton";
import { Layout } from "../ui/Layout";

interface GamesListClientProps {
	games: GameIdleEntity[];
}

export const GamesListClient: React.FC<GamesListClientProps> = ({ games }) => {
	const { dataStream: gamesStream = games } = useEventsSource<GameIdleEntity[]>(
		routes.gamesStream(),
	);

	return (
		<Layout actions={<CreateButton />}>
			{gamesStream.map((game) => (
				<GameCard
					key={game.id}
					login={game.creator.login}
					rating={game.creator.rating}
					actions={
						<Link href={routes.game(game.id)}>
							<Button>Connect</Button>
						</Link>
					}
				/>
			))}
		</Layout>
	);
};
