import { sessionService } from "../services/session.service";
import type { UserEntity } from "../types";
import { userRepository } from "./repositories";

export async function getCurrentUser(
	getCookies?: () => Promise<string | undefined>,
): Promise<UserEntity> {
	const { session } = await sessionService.verifySession(getCookies);
	return userRepository.getUser({
		id: session.id,
	}) as unknown as Promise<UserEntity>;
}
