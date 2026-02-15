import cuid from "cuid";
import { error, successful } from "@/shared/lib/either";
import { DEFAULT_RATING } from "../config";
import { passwordService } from "../services/password.service";
import { userRepository } from "./repositories";

interface createUserProps {
	login: string;
	password: string;
}

export async function createUser({ login, password }: createUserProps) {
	const userWithLogin = await userRepository.getUser({ login });

	if (userWithLogin) {
		return error("user-login-exists" as const);
	}

	const { hash, salt } = await passwordService.hashPassword(password);

	const user = await userRepository.saveUser({
		id: cuid(),
		login,
		rating: DEFAULT_RATING,
		passwordHash: hash,
		salt,
	});

	return successful(user);
}
