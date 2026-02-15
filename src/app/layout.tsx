import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark h-dvh w-dvw`}
			>
				{children}
				<NextTopLoader showSpinner={false} />
				<Toaster />
			</body>
		</html>
	);
};

export default RootLayout;
