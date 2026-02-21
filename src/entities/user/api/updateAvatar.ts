import type { AvatarConfig } from "@/shared/types";
import { sessionService } from "../server";
import { userRepository } from "./repositories";

export async function updateUserAvatar(avatar: Required<AvatarConfig>) {
	const { session } = await sessionService.verifySession();
	return userRepository.saveUserAvatar(session.id, avatar);
}
