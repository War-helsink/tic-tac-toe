"use client";

import { customizableAvatarParts } from "../../config";
import type { AvatarConfig, AvatarPart } from "../../types";
import { AvatarPartItem } from "./AvatarPartItem";
import styles from "./style.module.css";

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
		<div className={styles.list}>
			<div className="flex gap-3 mx-auto w-min">
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
		</div>
	);
};
