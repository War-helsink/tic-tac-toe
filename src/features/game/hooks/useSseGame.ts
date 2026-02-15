"use client";

import { startTransition, useState } from "react";
import type { GameId } from "@/shared/types";
import { routes } from "@/shared/config";
import { doStep, type GameEntity, type PlayerEntity } from "@/entities/game";
import { useEventsSource } from "@/shared/lib/sse/client";
import { gameStepAction } from "../actions/gameStep";

export function useSseGame(gameId: GameId, player: PlayerEntity) {
	const [optimisticGame, dispatchOptimistic] = useState<GameEntity>();
	const { isPending, dataStream: game } = useEventsSource<GameEntity>(
		routes.gameStream(gameId),
		() => {
			dispatchOptimistic(undefined);
		},
	);

	const step = (index: number) => {
		if (game && game.status === "inProgress") {
			const result = doStep({ game, player, index });
			if (result.type === "successful") {
				dispatchOptimistic(result.value);
			}
		}
		startTransition(async () => {
			await gameStepAction({ gameId, index });
		});
	};

	return {
		game: optimisticGame ?? game,
		step,
		isPending: isPending,
	};
}
