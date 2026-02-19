"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/shared/ui";
import { navMain } from "../config";

interface NavMainProps {
	setting?: React.ReactNode;
}

export const NavMain: React.FC<NavMainProps> = ({ setting }) => {
	const pathname = usePathname();

	return (
		<>
			<SidebarGroup>
				<SidebarGroupLabel>Information</SidebarGroupLabel>
				<SidebarMenu>
					{navMain.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild isActive={pathname === item.url}>
								<Link href={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroup>
			<SidebarGroup>
				<SidebarGroupLabel>Settings</SidebarGroupLabel>
				<SidebarMenu>{setting}</SidebarMenu>
			</SidebarGroup>
		</>
	);
};
