"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createUser, sessionService } from "@/entities/user/server";

type SignUnFormState = {
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

export async function signUpAction(
	_: SignUnFormState,
	formData: FormData,
): Promise<SignUnFormState> {
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

	const createUserResult = await createUser(result.data);

	if (createUserResult.type === "successful") {
		await sessionService.addSession(createUserResult.value);

		redirect("/");
	}

	const errors = {
		"user-login-exists": "A user with this login exists.",
	}[createUserResult.error];

	return {
		formData,
		errors: {
			_errors: errors,
		},
	};
}
