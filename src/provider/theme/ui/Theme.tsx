"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider: React.FC<
	React.ComponentProps<typeof NextThemesProvider>
> = ({ children, ...props }) => {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
};
