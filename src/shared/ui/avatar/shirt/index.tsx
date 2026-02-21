import chroma from "chroma-js";
import type React from "react";
import type { ShirtType } from "../../../types";
import { ShirtHoody } from "./ShirtHoody";
import { ShirtPolo } from "./ShirtPolo";
import { ShirtShort } from "./ShirtShort";

export interface ShirtProps {
	color: string;
	type: ShirtType;
	className?: string;
}

export const Shirt: React.FC<ShirtProps> = ({ type, color, className }) => {
	const secondColor = chroma(color).brighten(1).hex();

	switch (type) {
		case "hoody":
			return (
				<ShirtHoody
					className={className}
					color={color}
					lightColor={secondColor}
				/>
			);
		case "polo":
			return (
				<ShirtPolo
					className={className}
					color={color}
					lightColor={secondColor}
				/>
			);
		case "short":
			return <ShirtShort className={className} color={color} />;
	}
};
