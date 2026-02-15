import type { UserId } from "@/shared/types";

export type UserEntity = {
	id: UserId;
	login: string;
	rating: number;
	passwordHash: string;
	salt: string;
};

export type SessionEntity = {
	id: UserId;
	login: string;
	expiredAt: string;
};
