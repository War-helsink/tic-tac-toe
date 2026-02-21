"use client";

import React from "react";
import { Avatar } from "../avatar";
import { customizableAvatarParts, defaultAvatarOptions } from "../../config";
import type {
	AvatarConfig,
	AvatarPart,
	AvatarPartColor,
	AvatarPartType,
	CustomizableAvatarPartColor,
	CustomizableAvatarPartType,
} from "../../types";
import { isAvatarPartWithColor, isAvatarPartWithType } from "../../utils";
import { Separator } from "../separator";
import { AvatarPartSelector } from "./AvatarPartSelector";
import { AvatarPartTypes } from "./AvatarPartTypes";
import { AvatarPartColors } from "./AvatarPartColors";

interface AvatarEditorProps {
	readonly avatarConfig: Required<AvatarConfig>;
	updateAvatarConfig(avatarConfig: Required<AvatarConfig>): void;
}

export const AvatarEditor: React.FC<AvatarEditorProps> = ({
	avatarConfig,
	updateAvatarConfig,
}) => {
	const [avatarPart, setAvatarPart] = React.useState<AvatarPart>(
		customizableAvatarParts[0],
	);

	const typeKey =
		isAvatarPartWithType(avatarPart) &&
		(`${avatarPart}Type` as `${AvatarPartType}Type`);

	const colorKey =
		isAvatarPartWithColor(avatarPart) &&
		(`${avatarPart}Color` as `${AvatarPartColor}Color`);

	const updateAvatarType = React.useCallback(
		(type: CustomizableAvatarPartType) => {
			if (!typeKey) return;
			updateAvatarConfig({
				...avatarConfig,
				[typeKey]: type,
			});
		},
		[avatarConfig, typeKey, updateAvatarConfig],
	);

	const updateAvatarColor = React.useCallback(
		(color: CustomizableAvatarPartColor) => {
			if (!colorKey) return;
			updateAvatarConfig({
				...avatarConfig,
				[colorKey]: color,
			});
		},
		[avatarConfig, colorKey, updateAvatarConfig],
	);

	return (
		<div className="w-full flex flex-col items-center gap-6">
			<Avatar size={128} avatarConfig={avatarConfig} />

			<Separator />

			<AvatarPartSelector
				avatarConfig={avatarConfig}
				selectedAvatarPart={avatarPart}
				onSelectAvatarPart={setAvatarPart}
			/>

			{typeKey && (
				<>
					<Separator />
					<AvatarPartTypes
						avatarPart={avatarPart}
						avatarConfig={avatarConfig}
						avatarPartType={avatarConfig[typeKey]}
						updateAvatarType={updateAvatarType}
						partTypes={[...defaultAvatarOptions[typeKey]]}
					/>
				</>
			)}

			{colorKey && (
				<>
					<Separator />
					<AvatarPartColors
						updateAvatarColor={updateAvatarColor}
						colors={[...defaultAvatarOptions[colorKey]]}
						avatarPartColor={avatarConfig[colorKey]}
					/>
				</>
			)}
		</div>
	);
};
