"use server";

import { redirect } from "next/navigation";
import { sessionService } from "@/entities/user/server";
import { routes } from "@/shared/config";

export async function signOutAction() {
	await sessionService.deleteSession();
	redirect(routes.signIn());
}
