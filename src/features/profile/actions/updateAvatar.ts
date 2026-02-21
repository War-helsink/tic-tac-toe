"use server";

import { updateUserAvatar } from "@/entities/user/server";
import type { AvatarConfig } from "@/shared/types";
import { hasObjectChanged } from "@/shared/utils";

export async function updateAvatarAction(
	state: Required<AvatarConfig>,
	newAvatar: Required<AvatarConfig>,
): Promise<Required<AvatarConfig>> {
	if (hasObjectChanged(newAvatar, state)) {
		return (await updateUserAvatar(newAvatar)).avatar as Required<AvatarConfig>;
	}
	return state;
}
