"use client";

import { useActionState } from "react";
import { routes } from "@/shared/config";
import { signUpAction } from "../actions/signUp";
import { AuthFormLayout } from "../ui/AuthFormLayout";
import { AuthFields } from "../ui/AuthFields";
import { SubmitButton } from "../ui/SubmitButton";
import { ErrorMessage } from "../ui/ErrorMessage";
import { BottomLink } from "../ui/BottomLink";

export const SignUpForm: React.FC = () => {
	const [formState, action, isPending] = useActionState(signUpAction, {});

	return (
		<AuthFormLayout
			title="Sign Up"
			description="Create your account to get started"
			action={action}
			fields={<AuthFields {...formState} />}
			actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
			error={
				formState.errors?._errors && (
					<ErrorMessage error={formState.errors._errors} />
				)
			}
			link={
				<BottomLink
					text="Already have an account?"
					linkText="Sign in"
					url={routes.signIn()}
				/>
			}
		/>
	);
};
