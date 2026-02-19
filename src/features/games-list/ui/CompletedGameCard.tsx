import {
	GameField,
	type GameOverEntity,
	type GameOverDrawEntity,
} from "@/entities/game";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/shared/ui";
import { Badge } from "@/shared/ui";
import { RatingBadge } from "./RatingBadge";

interface GameCardProps {
	currentUserId: string;
	game: GameOverEntity | GameOverDrawEntity;
}

export const CompletedGameCard: React.FC<GameCardProps> = ({
	currentUserId,
	game,
}) => {
	const isDraw = game.status === "gameOverDraw";
	const opponent = game.players.find((p) => p.id !== currentUserId);

	const currentRatingChange = game.ratingChanges.find(
		(r) => r.userId === currentUserId,
	);

	const opponentRatingChange = game.ratingChanges.find(
		(r) => r.userId !== currentUserId,
	);

	const isWinner =
		game.status === "gameOver" && game.winner.id === currentUserId;

	return (
		<Card className="transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-lg font-semibold">
					{opponent?.login}
				</CardTitle>

				{isDraw && <Badge variant="secondary">Draw</Badge>}

				{!isDraw && isWinner && (
					<Badge className="bg-chart-2 text-white">Victory</Badge>
				)}

				{!isDraw && !isWinner && (
					<Badge className="bg-destructive text-white">Defeat</Badge>
				)}
			</CardHeader>

			<CardContent className="space-y-4">
				<div className="space-y-2 text-sm">
					<div className="flex justify-between items-center">
						<span className="text-muted-foreground">You</span>
						<RatingBadge
							before={currentRatingChange!.ratingBefore}
							after={currentRatingChange!.ratingAfter}
						/>
					</div>

					<div className="flex justify-between items-center">
						<span className="text-muted-foreground">{opponent?.login}</span>
						<RatingBadge
							before={opponentRatingChange!.ratingBefore}
							after={opponentRatingChange!.ratingAfter}
						/>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<GameField game={game} />
				</div>
			</CardContent>

			<CardFooter className="flex justify-end text-xs text-muted-foreground">
				<span>
					{isDraw
						? "Nobody won"
						: isWinner
							? "You won this match"
							: "Better luck next time"}
				</span>
			</CardFooter>
		</Card>
	);
};
