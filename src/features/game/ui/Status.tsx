import {
	type GameEntity,
	getGameCurrentSymbol,
	getPlayerSymbol,
} from "@/entities/game";

import { Badge } from "@/shared/ui/badge";

interface GameStatusProps {
	game: GameEntity;
}

export const GameStatus: React.FC<GameStatusProps> = ({ game }) => {
	switch (game.status) {
		case "idle":
			return (
				<div className="flex justify-center">
					<Badge variant="secondary">Waiting for opponent</Badge>
				</div>
			);

		case "inProgress": {
			const currentSymbol = getGameCurrentSymbol(game);
			return (
				<div className="flex justify-center">
					<Badge>Turn: {currentSymbol}</Badge>
				</div>
			);
		}

		case "gameOver": {
			const winnerSymbol = getPlayerSymbol(game.winner, game);
			return (
				<div className="flex justify-center">
					<Badge className="bg-green-500 text-white">
						Winner: {winnerSymbol}
					</Badge>
				</div>
			);
		}

		case "gameOverDraw":
			return (
				<div className="flex justify-center">
					<Badge variant="outline">Draw</Badge>
				</div>
			);
	}
};
