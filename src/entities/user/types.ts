import type { AvatarConfig, UserId } from "@/shared/types";

export type UserEntity = {
	id: UserId;
	login: string;
	rating: number;
	avatar: Required<AvatarConfig>;
	passwordHash: string;
	salt: string;
};

export type SessionEntity = {
	id: UserId;
	login: string;
	expiredAt: string;
};
