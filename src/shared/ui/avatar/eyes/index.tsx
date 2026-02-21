import type { EyesType } from "../../../types";
import { EyesCircle } from "./EyesCircle";
import { EyesOval } from "./EyesOval";
import { EyesSmile } from "./EyesSmile";

export interface EyesProps {
	type: EyesType;
	className?: string;
}

export const Eyes: React.FC<EyesProps> = ({ type, className }) => {
	switch (type) {
		case "circle":
			return <EyesCircle className={className} />;
		case "oval":
			return <EyesOval className={className} />;
		case "smile":
			return <EyesSmile className={className} />;
	}
};
