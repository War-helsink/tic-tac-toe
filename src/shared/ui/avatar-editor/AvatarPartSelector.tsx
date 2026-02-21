"use client";

import { customizableAvatarParts } from "../../config";
import type { AvatarConfig, AvatarPart } from "../../types";
import { AvatarPartItem } from "./AvatarPartItem";

interface AvatarPartSelectorProps {
	readonly selectedAvatarPart: AvatarPart;
	readonly avatarConfig: Required<AvatarConfig>;
	onSelectAvatarPart: (avatarPart: AvatarPart) => void;
}

export const AvatarPartSelector: React.FC<AvatarPartSelectorProps> = ({
	avatarConfig,
	selectedAvatarPart,
	onSelectAvatarPart,
}) => {
	return (
		<div className="flex gap-3">
			{customizableAvatarParts.map((part, index) => (
				<AvatarPartItem
					key={index}
					avatarPart={part}
					avatarConfig={avatarConfig}
					onClick={() => onSelectAvatarPart(part)}
					isActive={part === selectedAvatarPart}
				/>
			))}
		</div>
	);
};
