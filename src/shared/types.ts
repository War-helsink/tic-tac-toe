import type {
	customizableAvatarParts,
	defaultAvatarOptions,
	partsWithColor,
	partsWithType,
} from "./config";

export type UserId = string;
export type GameId = string;

export type BgColor = (typeof defaultAvatarOptions.bgColor)[number];
export type FaceColor = (typeof defaultAvatarOptions.faceColor)[number];
export type HairColor = (typeof defaultAvatarOptions.hairColor)[number];
export type HatColor = (typeof defaultAvatarOptions.hatColor)[number];
export type ShirtColor = (typeof defaultAvatarOptions.shirtColor)[number];

export type EarType = (typeof defaultAvatarOptions.earType)[number];
export type HairType = (typeof defaultAvatarOptions.hairType)[number];
export type HatType = (typeof defaultAvatarOptions.hatType)[number];
export type EyesBrowType = (typeof defaultAvatarOptions.eyesBrowType)[number];
export type EyesType = (typeof defaultAvatarOptions.eyesType)[number];
export type GlassesType = (typeof defaultAvatarOptions.glassesType)[number];
export type NoseType = (typeof defaultAvatarOptions.noseType)[number];
export type MouthType = (typeof defaultAvatarOptions.mouthType)[number];
export type ShirtType = (typeof defaultAvatarOptions.shirtType)[number];

export interface AvatarConfigColor {
	bgColor?: BgColor;
	faceColor?: FaceColor;
	hairColor?: HairColor;
	hatColor?: HatColor;
	shirtColor?: ShirtColor;
}

export interface AvatarConfigType {
	earType?: EarType;
	hairType?: HairType;
	hatType?: HatType;
	eyesType?: EyesType;
	glassesType?: GlassesType;
	noseType?: NoseType;
	mouthType?: MouthType;
	shirtType?: ShirtType;
	eyesBrowType?: EyesBrowType;
}

export type AvatarConfig = AvatarConfigColor & AvatarConfigType;

export type DefaultOptions = typeof defaultAvatarOptions;

export type AvatarPart = (typeof customizableAvatarParts)[number];
export type AvatarPartType = (typeof partsWithType)[number];
export type AvatarPartColor = (typeof partsWithColor)[number];

type Mutable<T> = {
	-readonly [P in keyof T]: T[P];
};

export type CustomizableAvatarPartColors = Mutable<
	DefaultOptions[`${AvatarPartColor}Color`]
>;
export type CustomizableAvatarPartColor = CustomizableAvatarPartColors[number];

export type CustomizableAvatarPartTypes = Mutable<
	DefaultOptions[`${AvatarPartType}Type`]
>;
export type CustomizableAvatarPartType = CustomizableAvatarPartTypes[number];
