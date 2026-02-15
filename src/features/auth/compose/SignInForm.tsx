"use client";

import { useActionState } from "react";
import { routes } from "@/shared/config";
import { signInAction } from "../actions/singIn";
import { AuthFormLayout } from "../ui/AuthFormLayout";
import { AuthFields } from "../ui/AuthFields";
import { SubmitButton } from "../ui/SubmitButton";
import { ErrorMessage } from "../ui/ErrorMessage";
import { BottomLink } from "../ui/BottomLink";

export const SignInForm: React.FC = () => {
	const [formState, action, isPending] = useActionState(signInAction, {});

	return (
		<AuthFormLayout
			title="Sign In"
			description="Welcome back! Please sign in to your account"
			action={action}
			fields={<AuthFields {...formState} />}
			actions={<SubmitButton isPending={isPending}> Sign In</SubmitButton>}
			error={
				formState.errors?._errors && (
					<ErrorMessage error={formState.errors._errors} />
				)
			}
			link={
				<BottomLink
					text="Don't have an account?"
					linkText="Sign up"
					url={routes.signUp()}
				/>
			}
		/>
	);
};
