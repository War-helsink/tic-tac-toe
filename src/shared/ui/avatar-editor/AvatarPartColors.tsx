"use client";

import type {
	CustomizableAvatarPartColor,
	CustomizableAvatarPartColors,
} from "../../types";
import { AvatarPartColorItem } from "./AvatarPartColorItem";
import styles from "./style.module.css";

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
		<div className={styles.list}>
			<div className="flex gap-3 mx-auto w-min">
				{colors.map((color, index) => (
					<AvatarPartColorItem
						key={index}
						isActive={avatarPartColor === color}
						color={color}
						onPress={() => updateAvatarColor(color)}
					/>
				))}
			</div>
		</div>
	);
};
