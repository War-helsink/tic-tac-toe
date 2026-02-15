export type ErrorType<error> = {
	type: "error";
	error: error;
};

export type SuccessfulType<R> = {
	type: "successful";
	value: R;
};

export type Either<L, R> = ErrorType<L> | SuccessfulType<R>;

export const error = <const L>(error: L): ErrorType<L> => ({
	error,
	type: "error",
});

export const successful = <const R>(value: R): SuccessfulType<R> => ({
	type: "successful",
	value: value,
});

export const mapSuccessful = <R, R2, L = unknown>(
	either: Either<L, R>,
	fn: (value: R) => R2,
): Either<L, R2> => {
	if (either.type === "successful") {
		return successful(fn(either.value));
	}

	return either;
};
export const mapError = <R, L, L2>(
	either: Either<L, R>,
	fn: (value: L) => L2,
): Either<L2, R> => {
	if (either.type === "error") {
		return error(fn(either.error));
	}

	return either;
};

export const matchEither = <L, R, V>(
	either: Either<L, R>,
	mathers: {
		left: (error: NoInfer<L>) => V;
		right: (value: NoInfer<R>) => V;
	},
): V => {
	if (either.type === "error") {
		return mathers.left(either.error);
	}

	return mathers.right(either.value);
};
