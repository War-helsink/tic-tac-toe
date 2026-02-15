import { prisma } from "@/shared/lib/prisma";
import type { UserWhereInput } from "@/generated/models";
import type { UserEntity } from "../types";

export function saveUser(user: UserEntity): Promise<UserEntity> {
	return prisma.user.upsert({
		where: {
			id: user.id,
		},
		create: user,
		update: user,
	});
}

export function getUser(where: UserWhereInput) {
	return prisma.user.findFirst({ where });
}

export const userRepository = { saveUser, getUser };
