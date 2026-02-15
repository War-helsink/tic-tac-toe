import { Button } from "@/shared/ui";
import { signOutAction } from "../actions/signOut";

export const ButtonSignOut: React.FC = () => {
	return (
		<form action={signOutAction}>
			<Button>Sign out</Button>
		</form>
	);
};
