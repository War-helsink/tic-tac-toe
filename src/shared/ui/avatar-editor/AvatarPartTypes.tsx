"use client";

import { AvatarPartItem } from "./AvatarPartItem";
import type {
	AvatarConfig,
	AvatarPart,
	CustomizableAvatarPartType,
	CustomizableAvatarPartTypes,
} from "@/shared/types";

interface AvatarPartTypesProps {
	readonly avatarConfig: Required<AvatarConfig>;
	readonly avatarPart: AvatarPart;
	readonly partTypes: CustomizableAvatarPartTypes;
	readonly avatarPartType: CustomizableAvatarPartType;
	updateAvatarType: (partType: CustomizableAvatarPartType) => void;
}

export const AvatarPartTypes: React.FC<AvatarPartTypesProps> = ({
	partTypes,
	avatarPart,
	avatarConfig,
	avatarPartType,
	updateAvatarType,
}) => {
	return (
		<div className="flex gap-3">
			{partTypes.map((partType, index) => (
				<AvatarPartItem
					key={index}
					avatarPart={avatarPart}
					avatarConfig={avatarConfig}
					avatarPartType={partType}
					onClick={() => updateAvatarType(partType)}
					isActive={avatarPartType === partType}
				/>
			))}
		</div>
	);
};
