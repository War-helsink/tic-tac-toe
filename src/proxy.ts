import { type NextRequest, NextResponse } from "next/server";
import { sessionService } from "./entities/user/server";
import { routes } from "./shared/config";

export async function proxy(request: NextRequest) {
	const { isAuth } = await sessionService.verifySessionProxy(request);

	if (!isAuth) {
		return NextResponse.redirect(new URL(routes.signIn(), request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/game/:path*", "/games/:path*", "/user/:path*", "/"],
};
