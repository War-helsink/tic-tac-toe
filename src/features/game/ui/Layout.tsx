import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

interface GameLayoutProps {
	title: string;

	players?: React.ReactNode;
	status?: React.ReactNode;
	field?: React.ReactNode;
}

export const GameLayout: React.FC<GameLayoutProps> = ({
	title,
	status,
	field,
	players,
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{players}
				{status}
				<div className="flex items-center justify-center">{field}</div>
			</CardContent>
		</Card>
	);
};
