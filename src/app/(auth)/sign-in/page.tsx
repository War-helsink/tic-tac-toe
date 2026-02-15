import type { Metadata } from "next";
import { SignInForm } from "@/features/auth";

export const metadata: Metadata = {
	title: "Sign In",
	description: "Sign In",
};

const SignInPage: React.FC = () => {
	return <SignInForm />;
};

export default SignInPage;
