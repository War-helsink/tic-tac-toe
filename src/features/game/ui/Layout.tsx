import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

interface GameLayoutProps {
	players?: React.ReactNode;
	status?: React.ReactNode;
	field?: React.ReactNode;
}

export const GameLayout: React.FC<GameLayoutProps> = ({
	status,
	field,
	players,
}) => {
	return (
		<div className="flex flex-col items-center py-10 gap-4">
			<div className="w-[400px] font-semibold tracking-tight">{players}</div>
			<Card className="w-full max-w-[400px] shadow-xl">
				<CardHeader className="text-center">
					<CardTitle> {status}</CardTitle>
				</CardHeader>

				<CardContent className="flex flex-col gap-6">
					<div className="flex items-center justify-center">{field}</div>
				</CardContent>
			</Card>
		</div>
	);
};
