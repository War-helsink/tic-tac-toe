"use client";

import { useActionState, startTransition, useState } from "react";
import type { UserEntity } from "@/entities/user";
import { hasObjectChanged } from "@/shared/utils";
import { AvatarEditor, Button } from "@/shared/ui";
import { updateAvatarAction } from "../actions/updateAvatar";

interface UserProfileProps {
	user: UserEntity;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
	const [avatarConfig, setAvatarConfig] = useState(() => user.avatar);
	const [state, action, isPending] = useActionState(
		updateAvatarAction,
		user.avatar,
	);

	return (
		<div className="w-full flex flex-col gap-6 justify-center items-center">
			<AvatarEditor
				avatarConfig={avatarConfig}
				updateAvatarConfig={setAvatarConfig}
			/>
			<div className="flex flex-row gap-6">
				<Button
					disabled={isPending || !hasObjectChanged(avatarConfig, state)}
					onClick={() => startTransition(() => action(avatarConfig))}
				>
					Save
				</Button>
				{hasObjectChanged(avatarConfig, state) && (
					<Button variant="destructive" onClick={() => setAvatarConfig(state)}>
						Cancel
					</Button>
				)}
			</div>
		</div>
	);
};
