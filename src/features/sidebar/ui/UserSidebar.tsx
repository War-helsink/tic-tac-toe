import {
	LogoIcon,
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/shared/ui";
import { NavMain } from "./NavMain";

interface UserSidebarProps {
	setting?: React.ReactNode;
}

export const UserSidebar: React.FC<UserSidebarProps> = ({ setting }) => {
	return (
		<Sidebar variant="inset" collapsible="icon">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild className="cursor-pointer">
							<div>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-border text-sidebar-primary-foreground">
									<LogoIcon className="text-sidebar-primary-foreground size-5" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate text-xs">Your office</span>
								</div>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain setting={setting} />
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
};
