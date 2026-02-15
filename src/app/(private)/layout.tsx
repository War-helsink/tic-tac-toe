import { sessionService } from "@/entities/user/server";
import { ButtonSignOut } from "@/features/auth";

const PrivateLayout: React.FC<React.PropsWithChildren> = async ({
	children,
}) => {
	const { session } = await sessionService.verifySession();

	return (
		<div className="w-full h-full flex flex-col">
			<header className="px-10 py-4 flex flex-row gap-4 justify-between border-b border-b-primary/50 items-center">
				<div className="text-xl">Tik Tak Toe Online</div>
				<div className="flex gap-4 items-center">
					<div className="text-lg">{session.login}</div>
					<ButtonSignOut />
				</div>
			</header>
			{children}
		</div>
	);
};

export default PrivateLayout;
