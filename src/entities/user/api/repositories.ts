import { prisma } from "@/shared/lib/prisma";
import type {
	UserCreateInput,
	UserUpdateInput,
	UserWhereInput,
} from "@/generated/models";
import type { UserEntity } from "../types";
import type { AvatarConfig, UserId } from "@/shared/types";

function saveUser(user: UserEntity): Promise<UserEntity> {
	return prisma.user.upsert({
		where: {
			id: user.id,
		},
		create: user as UserCreateInput,
		update: user as UserUpdateInput,
	}) as unknown as Promise<UserEntity>;
}

function getUser(where: UserWhereInput) {
	return prisma.user.findFirst({ where });
}

function saveUserAvatar(userId: UserId, avatarConfig: Required<AvatarConfig>) {
	return prisma.user.update({
		where: { id: userId },
		data: {
			avatar: avatarConfig,
		},
	});
}

export const userRepository = { saveUser, getUser, saveUserAvatar };
