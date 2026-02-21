import { EyesBrowUpWoman } from "./EyesBrowUpWoman";
import { EyesBrowUp } from "./EyesBrowUp";
import type { EyesBrowType } from "../../../types";

export interface EyebrowProps {
	type: EyesBrowType;
	className?: string;
}

export const EyesBrow: React.FC<EyebrowProps> = ({ type, className }) => {
	switch (type) {
		case "upWoman":
			return <EyesBrowUpWoman className={className} />;
		case "up":
			return <EyesBrowUp className={className} />;
	}
};
