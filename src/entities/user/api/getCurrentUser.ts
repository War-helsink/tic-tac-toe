import { userRepository } from "./repositories";
import { sessionService } from "../services/session.service";

export async function getCurrentUser(
	getCookies?: () => Promise<string | undefined>,
) {
	const { session } = await sessionService.verifySession(getCookies);
	return userRepository.getUser({ id: session.id });
}
