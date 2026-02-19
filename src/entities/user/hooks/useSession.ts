"use client";

import { useContext } from "react";
import { SessionContext } from "../context";

export function useSession() {
	const session = useContext(SessionContext);

	if (!session) {
		throw new Error("Missing Session");
	}

	return session;
}
