"use client";

import type {
	AvatarConfig,
	AvatarPart,
	CustomizableAvatarPartType,
	CustomizableAvatarPartTypes,
} from "../../types";
import { AvatarPartItem } from "./AvatarPartItem";
import styles from "./style.module.css";

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
		<div className={styles.list}>
			<div className="flex gap-3 mx-auto w-min">
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
		</div>
	);
};
