import { SignOutButton } from "@/features/auth";
import { UserSidebar, UserSidebarInset } from "@/features/sidebar";
import { SidebarMenuItem, SidebarProvider } from "@/shared/ui";

const UserLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<SidebarProvider>
			<UserSidebar
				setting={
					<SidebarMenuItem>
						<SignOutButton
							variant="destructive"
							size="sm"
							className="w-full text-xs"
						/>
					</SidebarMenuItem>
				}
			/>
			<UserSidebarInset>{children}</UserSidebarInset>
		</SidebarProvider>
	);
};

export default UserLayout;
