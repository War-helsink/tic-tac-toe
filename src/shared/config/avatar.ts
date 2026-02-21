import type { AvatarConfig } from "../types";

export const defaultAvatarColors = {
	faceColor: [
		"#402e22",
		"#61402d",
		"#7a573a",
		"#906441",
		"#b6805c",
		"#dba67e",
		"#eeb894",
		"#f4caa8",
		"#f6d3b5",
		"#F9C9B6",
		"#ffdbac",
		"#f1c27d",
		"#e0ac69",
		"#c68642",
		"#8d5524",
		"#AC6651",
	],
	hairColor: [
		"#000",
		"#4B2E2A",
		"#77311D",
		"#8B5E3C",
		"#C1440E",
		"#F48150",
		"#efe3cc",
		"#D2EFF3",
		"#FC909F",
		"#506AF4",
	],
	hatColor: ["#000", "#77311D", "#FC909F", "#D2EFF3", "#506AF4", "#F48150"],
	shirtColor: [
		"#FEFEFE",
		"#9287FF",
		"#6BD9E9",
		"#FFC0CB",
		"#FC909F",
		"#F4D150",
		"#008000",
		"#0000FF",
		"#A020F0",
		"#800080",
		"#964B00",
		"#77311D",
		"#808080",
		"#0A0A0A",
	],
	bgColor: [
		"#9287FF",
		"#6BD9E9",
		"#FC909F",
		"#F4D150",
		"#E0DDFF",
		"#D2EFF3",
		"#FFEDEF",
		"#FFEBA4",
		"#506AF4",
		"#F48150",
		"#74D153",
	],
} as const;

export const hairGeneralType = ["normal"] as const;
export const hairManType = ["thick", "mohawk"] as const;
export const hairWomanType = ["womanLong", "womanShort"] as const;

export const eyesBrowManType = ["up"] as const;
export const eyesBrowWomanType = ["upWoman"] as const;

export const defaultAvatarTypes = {
	earType: ["small", "big"],
	hairType: [...hairGeneralType, ...hairManType, ...hairWomanType],
	hatType: ["beanie", "turban", "none"],
	eyesBrowType: [...eyesBrowManType, ...eyesBrowWomanType],
	eyesType: ["circle", "oval", "smile"],
	glassesType: ["round", "square", "none"],
	noseType: ["short", "long", "round"],
	mouthType: ["laugh", "smile", "peace"],
	shirtType: ["hoody", "short", "polo"],
} as const;

export const defaultAvatarOptions = {
	...defaultAvatarColors,
	...defaultAvatarTypes,
} as const;

export const customizableAvatarParts = [
	"bg",
	"face",
	"hair",
	"hat",
	"glasses",
	"ear",
	"nose",
	"mouth",
	"shirt",
	"eyes",
	"eyesBrow",
] as const;

export const partsWithType: Exclude<
	(typeof customizableAvatarParts)[number],
	"face" | "bg"
>[] = [
	"ear",
	"hair",
	"hat",
	"eyesBrow",
	"eyes",
	"glasses",
	"nose",
	"mouth",
	"shirt",
];

export const partsWithColor: Extract<
	(typeof customizableAvatarParts)[number],
	"face" | "hair" | "hat" | "shirt" | "bg"
>[] = ["face", "hair", "hat", "shirt", "bg"];

export const defaultAvatarConfigMale: Required<AvatarConfig> = {
	bgColor: "#9287FF",
	faceColor: "#AC6651",
	earType: "big",
	hairColor: "#000",
	hairType: "thick",
	hatColor: "#000",
	hatType: "none",
	eyesType: "circle",
	glassesType: "none",
	noseType: "long",
	mouthType: "smile",
	shirtType: "hoody",
	shirtColor: "#6BD9E9",
	eyesBrowType: "up",
};

export const defaultAvatarConfigFemale: Required<AvatarConfig> = {
	bgColor: "#FC909F",
	faceColor: "#F9C9B6",
	earType: "small",
	hairColor: "#FC909F",
	hairType: "womanLong",
	hatColor: "#D2EFF3",
	hatType: "none",
	eyesType: "smile",
	glassesType: "none",
	noseType: "round",
	mouthType: "peace",
	shirtType: "short",
	shirtColor: "#FC909F",
	eyesBrowType: "upWoman",
};
