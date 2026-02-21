import type React from "react";
import type { MouthType } from "../../../types";
import { MouthLaugh } from "./MouthLaugh";
import { MouthPeace } from "./MouthPeace";
import { MouthSmile } from "./MouthSmile";

export interface MouthProps {
	type: MouthType;
	className?: string;
}

export const Mouth: React.FC<MouthProps> = ({ type, className }) => {
	switch (type) {
		case "laugh":
			return <MouthLaugh className={className} />;
		case "peace":
			return <MouthPeace className={className} />;
		case "smile":
			return <MouthSmile className={className} />;
	}
};
