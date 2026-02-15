import {
	type GameEntity,
	getGameCurrentSymbol,
	getPlayerSymbol,
} from "@/entities/game";

interface GameStatusProps {
	game: GameEntity;
}

export const GameStatus: React.FC<GameStatusProps> = ({ game }) => {
	switch (game.status) {
		case "idle":
			return <div className="text-lg">Waiting for the player</div>;
		case "inProgress": {
			const currentSymbol = getGameCurrentSymbol(game);
			return <div className="text-lg">Progress: {currentSymbol}</div>;
		}
		case "gameOver": {
			const currentSymbol = getPlayerSymbol(game.winner, game);
			return <div className="text-lg">Winner: {currentSymbol}</div>;
		}
		case "gameOverDraw":
			return <div className="text-lg">Draw</div>;
	}
};
