import type { Metadata } from "next";
import { UserProfile } from "@/features/profile";
import { getCurrentUser } from "@/entities/user/server";

export const metadata: Metadata = {
	title: "Profile",
	description: "Profile",
};

const ProfilePage: React.FC = async () => {
	const user = await getCurrentUser();

	return (
		<main className="w-full h-full px-6 pt-4">
			<UserProfile user={user} />
		</main>
	);
};

export default ProfilePage;
