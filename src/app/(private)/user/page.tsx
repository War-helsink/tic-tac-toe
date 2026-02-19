import type { Metadata } from "next";
import { UserProfile } from "@/features/profile";

export const metadata: Metadata = {
	title: "Profile",
	description: "Profile",
};

const ProfilePage: React.FC = async () => {
	return (
		<main className="w-full h-full flex flex-col gap-5 justify-center items-center">
			<UserProfile />
		</main>
	);
};

export default ProfilePage;
