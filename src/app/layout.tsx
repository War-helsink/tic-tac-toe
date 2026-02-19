import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/provider/theme";
import { Toaster } from "@/shared/ui";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tic Tac Toe Online",
	description: "Tic Tac Toe Online",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh w-dvw`}
			>
				<ThemeProvider>{children}</ThemeProvider>
				<NextTopLoader showSpinner={false} />
				<Toaster />
			</body>
		</html>
	);
};

export default RootLayout;
