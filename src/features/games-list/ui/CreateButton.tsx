"use client";

import { toast } from "sonner";
import { startTransition, useActionState, useEffect } from "react";
import { Button } from "@/shared/ui";
import { mapError, successful, type SuccessfulType } from "@/shared/lib/either";
import { createGameAction } from "../actions/createGame";

export const CreateButton: React.FC = () => {
	const [state, dispatch, isPending] = useActionState<
		ReturnType<typeof createGameAction> | SuccessfulType<null>
	>(createGameAction, successful(null));

	useEffect(() => {
		mapError(state, (e) => {
			toast.error(
				{
					["can-create-only-one-game"]: "You can only create one game.",
					["user-not-found"]: "There is no user",
				}[e],
			);
		});
	}, [state]);

	return (
		<Button disabled={isPending} onClick={() => startTransition(dispatch)}>
			Create a game
		</Button>
	);
};
