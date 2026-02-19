import { Gamepad2, UserRound } from "lucide-react";
import { routes } from "@/shared/config";

export const navMain = [
	{
		title: "Your profile",
		url: routes.user(),
		icon: UserRound,
	},

	{
		title: "Your games",
		url: routes.userGames(),
		icon: Gamepad2,
	},
];
