import { useId } from "react";
import { Input, Label, PasswordInput } from "@/shared/ui";

interface AuthFieldsProps {
	formData?: FormData;
	errors?: {
		login?: string;
		password?: string;
	};
}

export const AuthFields: React.FC<AuthFieldsProps> = ({ errors, formData }) => {
	const loginId = useId();
	const passwordId = useId();

	return (
		<>
			<div className="space-y-2">
				<Label htmlFor={loginId}>Login</Label>
				<Input
					id={loginId}
					type="login"
					name="login"
					placeholder="Enter your login"
					required
					defaultValue={formData?.get("login")?.toString()}
				/>
				{errors?.login && <div>{errors.login}</div>}
			</div>
			<div className="space-y-2">
				<Label htmlFor={passwordId}>Password</Label>
				<PasswordInput
					id={passwordId}
					name="password"
					placeholder="Enter your password"
					required
					defaultValue={formData?.get("password")?.toString()}
				/>
				{errors?.password && <div>{errors.password}</div>}
			</div>
		</>
	);
};
