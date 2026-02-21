import type React from "react";
import type { NoseType } from "../../../types";
import { NoseLong } from "./NoseLong";
import { NoseRound } from "./NoseRound";
import { NoseShort } from "./NoseShort";

export interface NoseProps {
	type: NoseType;
	className?: string;
}

export const Nose: React.FC<NoseProps> = ({ type, className }) => {
	switch (type) {
		case "long":
			return <NoseLong className={className} />;
		case "round":
			return <NoseRound className={className} />;
		case "short":
			return <NoseShort className={className} />;
	}
};
