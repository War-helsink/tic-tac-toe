import type { EarType } from "../../../types";
import { EarBig } from "./EarBig";
import { EarSmall } from "./EarSmall";

export interface EarProps {
	color: string;
	type: EarType;
	className?: string;
}

export const Ear: React.FC<EarProps> = ({ type, ...props }) => {
	switch (type) {
		case "small":
			return <EarSmall {...props} />;
		case "big":
			return <EarBig {...props} />;
	}
};
