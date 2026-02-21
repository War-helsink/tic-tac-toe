import {
	defaultAvatarConfigFemale,
	defaultAvatarConfigMale,
	defaultAvatarOptions,
	partsWithColor,
	partsWithType,
} from "../config";
import type {
	AvatarConfig,
	AvatarPart,
	AvatarPartColor,
	AvatarPartType,
} from "../types";

export function isAvatarPartWithType(part: AvatarPart): part is AvatarPartType {
	return partsWithType.includes(part as AvatarPartType);
}

export function isAvatarPartWithColor(
	part: AvatarPart,
): part is AvatarPartColor {
	return partsWithColor.includes(part as AvatarPartColor);
}

export function getRandomValue<T extends readonly unknown[]>(
	values: T,
): T[number] {
	return values[Math.floor(Math.random() * values.length)];
}

export function getDefaultAvatarConfig(
	gender: "male" | "female" = "male",
): Required<AvatarConfig> {
	switch (gender) {
		case "male": {
			return { ...defaultAvatarConfigMale };
		}
		case "female": {
			return { ...defaultAvatarConfigFemale };
		}
	}
}

export function generateRandomUserAvatar(): Required<AvatarConfig> {
	const avatarConfig = {} as Required<AvatarConfig>;

	avatarConfig.faceColor = getRandomValue(defaultAvatarOptions.faceColor);
	avatarConfig.hairColor = getRandomValue(defaultAvatarOptions.hairColor);
	avatarConfig.hatColor = getRandomValue(defaultAvatarOptions.hatColor);
	avatarConfig.shirtColor = getRandomValue(defaultAvatarOptions.shirtColor);
	avatarConfig.bgColor = getRandomValue(defaultAvatarOptions.bgColor);

	avatarConfig.earType = getRandomValue(defaultAvatarOptions.earType);
	avatarConfig.hatType = getRandomValue(defaultAvatarOptions.hatType);
	avatarConfig.eyesType = getRandomValue(defaultAvatarOptions.eyesType);
	avatarConfig.glassesType = getRandomValue(defaultAvatarOptions.glassesType);
	avatarConfig.noseType = getRandomValue(defaultAvatarOptions.noseType);
	avatarConfig.mouthType = getRandomValue(defaultAvatarOptions.mouthType);
	avatarConfig.shirtType = getRandomValue(defaultAvatarOptions.shirtType);
	avatarConfig.hairType = getRandomValue(defaultAvatarOptions.hairType);
	avatarConfig.eyesBrowType = getRandomValue(defaultAvatarOptions.eyesBrowType);

	return avatarConfig;
}

export function calculateFontSize(avatarSize: number): number {
	return Math.round(avatarSize * 0.42);
}
