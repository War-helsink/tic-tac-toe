import Link from "next/link";
import { UserRound } from "lucide-react";
import { routes } from "@/shared/config";
import { buttonVariants } from "@/shared/ui";

export const UserButton: React.FC = () => {
	return (
		<Link
			href={routes.user()}
			className={buttonVariants({ variant: "outline", size: "icon" })}
		>
			<UserRound className="h-[1.2rem] w-[1.2rem]" />
		</Link>
	);
};
