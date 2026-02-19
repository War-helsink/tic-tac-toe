import { Badge } from "@/shared/ui";
import { cn } from "@/shared/utils";

interface RatingBadgeProps {
	before: number;
	after: number;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ before, after }) => {
	const diff = after - before;

	const isPositive = diff > 0;
	const isNegative = diff < 0;

	return (
		<div className="flex items-center gap-2">
			<Badge variant="secondary">{before}</Badge>

			<span className="text-muted-foreground">→</span>

			<Badge variant="secondary">{after}</Badge>

			<Badge
				className={cn(
					"font-semibold",
					isPositive && "bg-chart-2 text-white",
					isNegative && "bg-destructive text-white",
					!isPositive && !isNegative && "bg-muted text-muted-foreground",
				)}
			>
				{diff > 0 ? `+${diff}` : diff}
			</Badge>
		</div>
	);
};
