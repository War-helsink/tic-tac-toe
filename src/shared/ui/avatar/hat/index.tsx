import type React from "react";
import { X } from "lucide-react";
import type { HatType } from "../../../types";
import { HatBeanie } from "./HatBeanie";
import { HatTurban } from "./HatTurban";

export interface HatProps {
	color: string;
	type: HatType;
	className?: string;
	isAvatar?: boolean;
}

export const Hat: React.FC<HatProps> = ({
	isAvatar = true,
	type,
	color,
	className,
}) => {
	switch (type) {
		case "beanie":
			return <HatBeanie className={className} color={color} />;
		case "turban":
			return <HatTurban className={className} color={color} />;
		case "none":
			return !isAvatar && <X className={className} color={color} />;
	}
};
