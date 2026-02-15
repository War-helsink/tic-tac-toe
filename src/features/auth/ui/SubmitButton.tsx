import { Button } from "@/shared/ui";

interface SubmitButtonProps {
	children: React.ReactNode;
	isPending?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
	children,
	isPending,
}) => {
	return (
		<Button disabled={isPending} type="submit" className="w-full">
			{children}
		</Button>
	);
};
