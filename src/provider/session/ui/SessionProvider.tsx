"use client";

import type { SessionEntity } from "@/entities/user";
import { SessionContext } from "@/entities/user";

interface SessionProviderProps extends React.PropsWithChildren {
	session: SessionEntity;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
	children,
	session,
}) => {
	return (
		<SessionContext.Provider value={session}>
			{children}
		</SessionContext.Provider>
	);
};
