import { Button } from "@/shared/ui";
import { signOutAction } from "../actions/signOut";

export const SignOutButton: React.FC<
	Omit<React.ComponentProps<typeof Button>, "children">
> = (props) => {
	return (
		<form action={signOutAction}>
			<Button {...props}>Sign out</Button>
		</form>
	);
};
