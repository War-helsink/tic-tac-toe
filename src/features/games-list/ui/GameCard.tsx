import type { AvatarConfig } from "@/shared/types";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
	Badge,
	Avatar,
} from "@/shared/ui";
import { cn } from "@/shared/utils";

interface GameCardProps {
	creatorId: string;
	currentUserId: string;
	login: string;
	rating: number;
	avatarConfig: Required<AvatarConfig>;
	actions?: React.ReactNode;
}

export const GameCard: React.FC<GameCardProps> = ({
	creatorId,
	currentUserId,
	login,
	rating,
	actions,
	avatarConfig,
}) => {
	const isMine = creatorId === currentUserId;

	return (
		<Card
			className={cn(
				"group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
				isMine && "border-primary/30 shadow-md",
			)}
		>
			<CardHeader className="flex items-center justify-between pb-2">
				<div className="flex items-center gap-3">
					<div className="relative">
						<div className="rounded-full bg-muted p-1 ring-1 ring-border">
							<Avatar size={72} avatarConfig={avatarConfig} />
						</div>
						<div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-chart-2 ring-2 ring-background" />
					</div>
					<div className="space-y-1">
						<CardTitle className="text-lg font-semibold flex items-center gap-2">
							{login}
							{isMine && (
								<Badge variant="outline" className="text-xs">
									You
								</Badge>
							)}
						</CardTitle>

						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<span>Rating</span>
							<Badge variant="secondary">{rating}</Badge>
						</div>
					</div>
				</div>
				<Badge variant="secondary" className="bg-accent text-accent-foreground">
					Waiting
				</Badge>
			</CardHeader>

			<CardContent className="pt-2">
				<div className="text-sm text-muted-foreground">
					Room is waiting for an opponent to join
				</div>
			</CardContent>

			<CardFooter className="flex justify-end pt-4">{actions}</CardFooter>
		</Card>
	);
};
