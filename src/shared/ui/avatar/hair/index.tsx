import type React from "react";
import type { HairType } from "../../../types";
import { HairMohawk } from "./HairMohawk";
import { HairNormal } from "./HairNormal";
import { HairThick } from "./HairThick";
import { HairWomanLong } from "./HairWomanLong";
import { HairWomanShort } from "./HairWomanShort";

export interface HairProps {
	type: HairType;
	color: string;
	className?: string;
}

export const Hair: React.FC<HairProps> = ({ type, color, className }) => {
	switch (type) {
		case "mohawk":
			return <HairMohawk className={className} color={color} />;
		case "normal":
			return <HairNormal className={className} color={color} />;
		case "thick":
			return <HairThick className={className} color={color} />;
		case "womanLong":
			return <HairWomanLong className={className} color={color} />;
		case "womanShort":
			return <HairWomanShort className={className} color={color} />;
	}
};
