import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/shared/ui";

interface GameCardProps {
	login: string;
	rating: number;
	actions: React.ReactNode;
}

export const GameCard: React.FC<GameCardProps> = ({
	login,
	rating,
	actions,
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Playing with {login}</CardTitle>
			</CardHeader>
			<CardContent>Rating: {rating}</CardContent>
			<CardFooter>{actions}</CardFooter>
		</Card>
	);
};
