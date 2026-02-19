"use client";

import { useId } from "react";
import { useSession } from "@/entities/user";
import { Input, Label } from "@/shared/ui";

export const UserProfile: React.FC = () => {
	const nameId = useId();
	const session = useSession();

	return (
		<form className="flex flex-col gap-2">
			<div className="space-y-2">
				<Label htmlFor={nameId}>Login</Label>
				<Input
					id={nameId}
					disabled
					type="login"
					name="name"
					value={session.login}
					placeholder="Enter your login"
					required
				/>
			</div>
		</form>
	);
};
