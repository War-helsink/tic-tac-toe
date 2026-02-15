import type { Metadata } from "next";
import { SignUpForm } from "@/features/auth";

export const metadata: Metadata = {
	title: "Sign Up",
	description: "Sign Up",
};

const SignUpPage: React.FC = () => {
	return <SignUpForm />;
};

export default SignUpPage;
