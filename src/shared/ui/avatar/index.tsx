import { cn } from "@/shared/utils";
import { Ear } from "./ear";
import { EyesBrow } from "./eyebrow";
import { Eyes } from "./eyes";
import { Face } from "./face";
import { Glasses } from "./glasses";
import { Hair } from "./hair";
import { Hat } from "./hat";
import { Mouth } from "./mouth";
import { Nose } from "./nose";
import { Shirt } from "./shirt";
import type { AvatarConfig } from "../../types";

export interface AvatarProps
	extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
	readonly size: number;
	readonly avatarConfig: Required<AvatarConfig>;
}

export const Avatar: React.FC<AvatarProps> = ({
	size,
	avatarConfig,
	style,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				"rounded-full flex items-center justify-center overflow-hidden",
				className,
			)}
			style={{
				width: size,
				height: size,
				backgroundColor: avatarConfig.bgColor,
				...style,
			}}
			{...props}
		>
			<div className="relative size-full">
				<div className="absolute bottom-0 w-full h-[90%]">
					<Face color={avatarConfig.faceColor} />
					<Hat color={avatarConfig.hatColor} type={avatarConfig.hatType} />
					{avatarConfig.hatType === "none" && (
						<Hair color={avatarConfig.hairColor} type={avatarConfig.hairType} />
					)}
					<div className="absolute right-[-3%] top-[30%] w-full h-full flex flex-row justify-center items-center">
						<EyesBrow type={avatarConfig.eyesBrowType} />
						<Eyes type={avatarConfig.eyesType} />
						<Glasses type={avatarConfig.glassesType} />
						<Ear color={avatarConfig.faceColor} type={avatarConfig.earType} />
						<Nose type={avatarConfig.noseType} />
						<Mouth type={avatarConfig.mouthType} />
					</div>
					<Shirt
						color={avatarConfig.shirtColor}
						type={avatarConfig.shirtType}
					/>
				</div>
			</div>
		</div>
	);
};
