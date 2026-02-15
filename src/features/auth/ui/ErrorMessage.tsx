import { Alert, AlertDescription } from "@/shared/ui";

interface ErrorMessageProps {
	error: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
	return (
		<Alert variant="destructive">
			<AlertDescription>{error}</AlertDescription>
		</Alert>
	);
};
