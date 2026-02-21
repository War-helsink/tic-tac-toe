"use client";

import type {
	CustomizableAvatarPartColor,
	CustomizableAvatarPartColors,
} from "@/shared/types";
import { AvatarPartColorItem } from "./AvatarPartColorItem";

interface AvatarPartColorsProps {
	readonly colors: CustomizableAvatarPartColors;
	readonly avatarPartColor: CustomizableAvatarPartColor;
	updateAvatarColor: (color: CustomizableAvatarPartColor) => void;
}

export const AvatarPartColors: React.FC<AvatarPartColorsProps> = ({
	colors,
	avatarPartColor,
	updateAvatarColor,
}) => {
	return (
		<div className="flex gap-3">
			{colors.map((color, index) => (
				<AvatarPartColorItem
					key={index}
					isActive={avatarPartColor === color}
					color={color}
					onPress={() => updateAvatarColor(color)}
				/>
			))}
		</div>
	);
};
