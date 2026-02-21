import type React from "react";
import { X } from "lucide-react";
import type { GlassesType } from "../../../types";
import { GlassesRound } from "./GlassesRound";
import { GlassesSquare } from "./GlassesSquare";

export interface GlassesProps {
	isAvatar?: boolean;
	type: GlassesType;
	className?: string;
}

export const Glasses: React.FC<GlassesProps> = ({
	isAvatar = true,
	type,
	className,
}) => {
	switch (type) {
		case "round":
			return <GlassesRound className={className} />;
		case "square":
			return <GlassesSquare className={className} />;
		case "none":
			return !isAvatar && <X className={className} color="#000" />;
	}
};
