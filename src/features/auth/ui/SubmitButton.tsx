import { LoadingButton } from "@/shared/ui";

interface SubmitButtonProps {
	children: React.ReactNode;
	isPending?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
	children,
	isPending,
}) => {
	return (
		<LoadingButton isLoading={isPending} type="submit" className="w-full">
			{children}
		</LoadingButton>
	);
};
