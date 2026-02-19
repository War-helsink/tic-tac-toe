import { Header } from "@/features/header";
import { UserButton } from "@/features/auth";
import { ThemeToggle } from "@/features/theme";
import { SessionProvider } from "@/provider/session";
import { Logo } from "@/shared/ui";
import { sessionService } from "@/entities/user/server";

const PrivateLayout: React.FC<React.PropsWithChildren> = async ({
	children,
}) => {
	const { session } = await sessionService.verifySession();

	return (
		<SessionProvider session={session}>
			<div className="w-full h-full flex flex-col">
				<Header
					center={<Logo />}
					end={
						<>
							<UserButton />
							<ThemeToggle />
						</>
					}
				/>
				{children}
			</div>
		</SessionProvider>
	);
};

export default PrivateLayout;
