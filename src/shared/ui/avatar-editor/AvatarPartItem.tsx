"use client";

import React from "react";
import type {
	AvatarConfig,
	AvatarPart,
	CustomizableAvatarPartType,
	EarType,
	EyesBrowType,
	EyesType,
	GlassesType,
	HairType,
	HatType,
	MouthType,
	NoseType,
	ShirtType,
} from "@/shared/types";
import { cn } from "@/shared/utils";
import { Face } from "../avatar/face";
import { Hair } from "../avatar/hair";
import { Hat } from "../avatar/hat";
import { Glasses } from "../avatar/glasses";
import { Ear } from "../avatar/ear";
import { Nose } from "../avatar/nose";
import { Mouth } from "../avatar/mouth";
import { Shirt } from "../avatar/shirt";
import { Eyes } from "../avatar/eyes";
import { EyesBrow } from "../avatar/eyebrow";

interface AvatarPartItemProps {
	readonly onClick?: VoidFunction;
	readonly isActive: boolean;
	readonly avatarPart: AvatarPart;
	readonly avatarConfig: Required<AvatarConfig>;
	readonly avatarPartType?: CustomizableAvatarPartType;
}

const SVG_CLASS =
	"w-full! h-full! absolute! top-auto! left-auto! right-auto! bottom-auto!";

export const AvatarPartItem: React.FC<
	AvatarPartItemProps & React.PropsWithChildren
> = ({ avatarPart, avatarConfig, avatarPartType, onClick, isActive }) => {
	const renderComponent = React.useMemo(() => {
		switch (avatarPart) {
			case "face":
				return <Face className={SVG_CLASS} color={avatarConfig.faceColor} />;
			case "hair":
				return (
					<Hair
						className={SVG_CLASS}
						color={avatarConfig.hairColor}
						type={(avatarPartType as HairType) || avatarConfig.hairType}
					/>
				);
			case "hat":
				return (
					<Hat
						className={SVG_CLASS}
						isAvatar={false}
						color={avatarConfig.hatColor}
						type={(avatarPartType as HatType) || avatarConfig.hatType}
					/>
				);
			case "glasses":
				return (
					<Glasses
						className={SVG_CLASS}
						isAvatar={false}
						type={(avatarPartType as GlassesType) || avatarConfig.glassesType}
					/>
				);
			case "ear":
				return (
					<Ear
						className={SVG_CLASS}
						type={(avatarPartType as EarType) || avatarConfig.earType}
						color={avatarConfig.faceColor}
					/>
				);
			case "nose":
				return (
					<Nose
						className={SVG_CLASS}
						type={(avatarPartType as NoseType) || avatarConfig.noseType}
					/>
				);
			case "mouth":
				return (
					<Mouth
						className={SVG_CLASS}
						type={(avatarPartType as MouthType) || avatarConfig.mouthType}
					/>
				);
			case "shirt":
				return (
					<Shirt
						className={SVG_CLASS}
						color={avatarConfig.shirtColor}
						type={(avatarPartType as ShirtType) || avatarConfig.shirtType}
					/>
				);
			case "eyes":
				return (
					<Eyes
						className={SVG_CLASS}
						type={(avatarPartType as EyesType) || avatarConfig.eyesType}
					/>
				);
			case "eyesBrow":
				return (
					<EyesBrow
						className={SVG_CLASS}
						type={(avatarPartType as EyesBrowType) || avatarConfig.eyesBrowType}
					/>
				);
			default:
				return null;
		}
	}, [avatarPart, avatarConfig, avatarPartType]);

	if (!renderComponent) {
		return (
			<button
				type="button"
				onClick={onClick}
				className={cn(
					"relative w-16 h-16 p-1 rounded-full border flex items-center justify-center transition-all duration-200",
					isActive
						? "opacity-100 border-indigo-600 ring-2 ring-indigo-500/40"
						: "opacity-50 border-gray-300 hover:opacity-80",
				)}
			>
				<div
					className="w-full h-full rounded-full"
					style={{ backgroundColor: avatarConfig.bgColor }}
				/>
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"relative w-16 h-16 p-3 rounded-full border flex items-center justify-center cursor-pointer bg-white transition-all duration-200",
				isActive
					? "opacity-100 border-indigo-600 ring-2 ring-indigo-500/40"
					: "opacity-50 border-gray-300 hover:opacity-80",
			)}
		>
			<div className="relative w-full h-full">
				<div className="absolute inset-0 flex items-center justify-center">
					{renderComponent}
				</div>
			</div>
		</button>
	);
};
