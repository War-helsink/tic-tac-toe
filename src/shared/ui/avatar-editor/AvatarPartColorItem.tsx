"use client";

import type { CustomizableAvatarPartColor } from "@/shared/types";
import { cn } from "@/shared/utils";

interface AvatarPartColorItemProps {
	onPress?: VoidFunction;
	readonly color: CustomizableAvatarPartColor;
	readonly isActive: boolean;
}

export const AvatarPartColorItem: React.FC<AvatarPartColorItemProps> = ({
	color,
	onPress,
	isActive,
}) => {
	return (
		<button
			onClick={onPress}
			type="button"
			className={cn(
				"w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95",

				isActive
					? "opacity-100 border-indigo-600 ring-2 ring-indigo-500/40"
					: "border-gray-300 hover:border-gray-400",
			)}
			style={{ backgroundColor: color }}
		/>
	);
};
