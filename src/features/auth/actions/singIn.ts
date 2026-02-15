"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { sessionService, verifyUserPassword } from "@/entities/user/server";

type SignInFormState = {
	formData?: FormData;
	errors?: {
		login?: string;
		password?: string;
		_errors?: string;
	};
};

const formDataSchema = z.object({
	login: z.string().min(3),
	password: z.string().min(3),
});

export async function signInAction(
	_: SignInFormState,
	formData: FormData,
): Promise<SignInFormState> {
	const data = Object.fromEntries(formData.entries());
	const result = formDataSchema.safeParse(data);

	if (!result.success) {
		const formatedErrors = result.error.format();
		return {
			formData,
			errors: {
				login: formatedErrors.login?._errors.join(", "),
				password: formatedErrors.password?._errors.join(", "),
				_errors: formatedErrors._errors.join(", "),
			},
		};
	}

	const verifyUserResult = await verifyUserPassword(result.data);

	if (verifyUserResult.type === "successful") {
		await sessionService.addSession(verifyUserResult.value);

		redirect("/");
	}

	const errors = {
		"wron-login-or-password": "Incorrect login or password",
	}[verifyUserResult.error];

	return {
		formData,
		errors: {
			_errors: errors,
		},
	};
}
