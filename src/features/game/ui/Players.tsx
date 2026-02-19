import type { GameEntity, RatingChangeEntity } from "@/entities/game";
import { getGameCurrentSymbol } from "@/entities/game";
import { Card, Badge } from "@/shared/ui";
import { cn } from "@/shared/utils";

interface GamePlayersProps {
	game: GameEntity;
}

export const GamePlayers: React.FC<GamePlayersProps> = ({ game }) => {
	const isGameOver =
		game.status === "gameOver" || game.status === "gameOverDraw";

	const firstPlayer = game.status === "idle" ? game.creator : game.players[0];

	const secondPlayer = game.status === "idle" ? undefined : game.players[1];

	const currentSymbol =
		game.status === "inProgress" ? getGameCurrentSymbol(game) : null;

	const getRatingChange = (userId: string): RatingChangeEntity | undefined => {
		if (!isGameOver) return;
		return game.ratingChanges.find((r) => r.userId === userId);
	};

	const renderRating = (player: typeof firstPlayer | undefined) => {
		if (!player) return null;

		if (!isGameOver) {
			return <div className="text-sm">Rating: {player.rating}</div>;
		}

		const change = getRatingChange(player.id);

		if (!change) return null;

		const isPositive = change.delta > 0;
		const isNegative = change.delta < 0;

		return (
			<div className="flex items-center gap-2 text-sm">
				<span>{change.ratingBefore}</span>
				<span className="text-muted-foreground">→</span>
				<span>{change.ratingAfter}</span>

				<Badge
					className={cn(
						"font-semibold",
						isPositive && "bg-chart-2 text-white",
						isNegative && "bg-destructive text-white",
						!isPositive && !isNegative && "bg-muted text-muted-foreground",
					)}
				>
					{change.delta > 0 ? `+${change.delta}` : change.delta}
				</Badge>
			</div>
		);
	};

	const renderStatus = (playerId: string) => {
		if (!isGameOver) return null;

		if (game.status === "gameOverDraw") {
			return <Badge variant="secondary">Draw</Badge>;
		}

		if (game.winner.id === playerId) {
			return <Badge className="bg-chart-2 text-white">Winner</Badge>;
		}

		return <Badge className="bg-destructive text-white">Loser</Badge>;
	};

	return (
		<div className="grid grid-cols-2 gap-4">
			<Card
				className={cn(
					"p-4 space-y-2 transition-all items-center",
					currentSymbol === "X" && "ring-2 ring-primary",
				)}
			>
				<div className="flex items-center justify-between gap-4">
					<div className="text-sm text-muted-foreground">Player X</div>
					{renderStatus(firstPlayer.id)}
				</div>

				<div className="text-lg font-semibold">{firstPlayer.login}</div>

				{renderRating(firstPlayer)}
			</Card>

			<Card
				className={cn(
					"p-4 space-y-2 transition-all items-center",
					currentSymbol === "O" && "ring-2 ring-primary",
				)}
			>
				<div className="flex items-center justify-between gap-4">
					<div className="text-sm text-muted-foreground">Player O</div>
					{secondPlayer && renderStatus(secondPlayer.id)}
				</div>

				<div className="text-lg font-semibold">
					{secondPlayer?.login ?? "..."}
				</div>

				{renderRating(secondPlayer)}
			</Card>
		</div>
	);
};
