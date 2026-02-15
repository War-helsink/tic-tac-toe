import type { UserEntity, SessionEntity } from "./types";

export const userToSession = (
	user: UserEntity,
	expiredAt: string,
): SessionEntity => {
	return {
		id: user.id,
		login: user.login,
		expiredAt,
	};
};
