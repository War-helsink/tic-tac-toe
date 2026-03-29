"use client";

import { use, useCallback, useEffect, useRef, useState } from "react";
import type { GameOverDrawEntity, GameOverEntity } from "@/entities/game";
import { CompletedGameCard } from "../ui/CompletedGameCard";

interface UserGamesListClientProps {
	currentUserId: string;
	firstPagePromise: Promise<{
		games: (GameOverEntity | GameOverDrawEntity)[];
		nextCursor: string | null;
	}>;
}

export const UserGamesListClient: React.FC<UserGamesListClientProps> = ({
	currentUserId,
	firstPagePromise,
}) => {
	const firstPage = use(firstPagePromise);

	const [games, setGames] = useState(firstPage.games);
	const [nextCursor, setNextCursor] = useState<string | null>(
		firstPage.nextCursor,
	);
	const [loading, setLoading] = useState(false);

	const sentinelRef = useRef<HTMLDivElement | null>(null);

	const loadMore = useCallback(async () => {
		if (!nextCursor || loading) {
			return;
		}

		setLoading(true);
		try {
			const params = new URLSearchParams();
			if (nextCursor) {
				params.set("cursor", nextCursor);
			}

			const res = await fetch(`/api/user-games?${params.toString()}`);
			if (!res.ok) {
				return;
			}

			const data: {
				games: (GameOverEntity | GameOverDrawEntity)[];
				nextCursor: string | null;
			} = await res.json();

			setGames((prev) => [...prev, ...data.games]);
			setNextCursor(data.nextCursor);
		} finally {
			setLoading(false);
		}
	}, [loading, nextCursor]);

	useEffect(() => {
		const element = sentinelRef.current;
		if (!element || !nextCursor) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					void loadMore();
				}
			},
			{
				root: null,
				rootMargin: "200px",
				threshold: 0.1,
			},
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [loadMore, nextCursor]);

	return (
		<div className="p-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
				{games.map((game) => (
					<CompletedGameCard
						key={game.id}
						game={game}
						currentUserId={currentUserId}
					/>
				))}
			</div>

			<div ref={sentinelRef} className="h-10" />

			{loading && (
				<div className="w-full flex justify-center py-4 text-sm text-muted-foreground">
					Loading more...
				</div>
			)}
		</div>
	);
};
