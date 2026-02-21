import { error, successful } from "@/shared/lib/either";
import { userRepository } from "./repositories";
import { passwordService } from "../services/password.service";
import type { UserEntity } from "../types";

export async function verifyUserPassword({
	login,
	password,
}: {
	login: string;
	password: string;
}) {
	const user = (await userRepository.getUser({ login })) as UserEntity;

	if (!user) {
		return error("wron-login-or-password" as const);
	}

	const isCompare = await passwordService.comparePasswords({
		hash: user.passwordHash,
		salt: user.salt,
		password,
	});

	if (!isCompare) {
		return error("wron-login-or-password" as const);
	}

	return successful(user);
}
