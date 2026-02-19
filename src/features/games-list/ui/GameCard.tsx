import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
	Badge,
} from "@/shared/ui";
import { cn } from "@/shared/utils";

interface GameCardProps {
	creatorId: string;
	currentUserId: string;
	login: string;
	rating: number;
	actions?: React.ReactNode;
}

export const GameCard: React.FC<GameCardProps> = ({
	creatorId,
	currentUserId,
	login,
	rating,
	actions,
}) => {
	const isMine = creatorId === currentUserId;

	return (
		<Card
			className={cn(
				"transition-all hover:shadow-xl hover:-translate-y-2.5",
				isMine && "border-primary/20 shadow-md",
			)}
		>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-lg font-semibold flex items-center gap-2">
					{login}
					{isMine && <Badge variant="outline">You</Badge>}
				</CardTitle>

				<Badge variant="secondary">Waiting</Badge>
			</CardHeader>

			<CardContent className="space-y-3">
				<div className="text-sm text-muted-foreground">
					Rating: <Badge variant="outline">{rating}</Badge>
				</div>

				<div className="text-xs text-muted-foreground">
					Room is waiting for an opponent to join
				</div>
			</CardContent>

			<CardFooter className="flex justify-end">{actions}</CardFooter>
		</Card>
	);
};
