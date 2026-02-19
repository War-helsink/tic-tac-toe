import Link from "next/link";
import { routes } from "@/shared/config";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/shared/ui";

interface AuthFormLayoutProps {
	title: string;
	description: string;
	fields: React.ReactNode;
	actions: React.ReactNode;
	link: React.ReactNode;
	error: React.ReactNode;
	action: (formData: FormData) => void;
}

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
	actions,
	description,
	fields,
	link,
	title,
	error,
	action,
}) => {
	return (
		<Card className="w-full h-full max-w-md">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-center">
					{title}
				</CardTitle>
				<CardDescription className="text-center">{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={action} className="space-y-4">
					{fields}
					{error}
					{actions}
				</form>
			</CardContent>
			<CardFooter className="flex flex-col justify-center gap-4">
				<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
					By clicking continue, you agree to our{" "}
					<Link href={routes.termsOfService()}>Terms of Service</Link> and{" "}
					<Link href={routes.privacyPolicy()}>Privacy Policy</Link>.
				</div>
				{link}
			</CardFooter>
		</Card>
	);
};
