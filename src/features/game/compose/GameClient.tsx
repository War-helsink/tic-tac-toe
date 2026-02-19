"use client";

import { GameField, type GameEntity, type PlayerEntity } from "@/entities/game";
import { GameLayout } from "../ui/Layout";
import { GamePlayers } from "../ui/Players";
import { GameStatus } from "../ui/Status";
import { useSseGame } from "../hooks/useSseGame";

interface GameClientProps {
	defaultGame: GameEntity;
	player: PlayerEntity;
}

export const GameClient: React.FC<GameClientProps> = ({
	defaultGame,
	player,
}) => {
	const { game = defaultGame, step } = useSseGame(defaultGame.id, player);

	return (
		<GameLayout
			players={<GamePlayers game={game} />}
			status={<GameStatus game={game} />}
			field={<GameField game={game} onCellClick={step} />}
		/>
	);
};
