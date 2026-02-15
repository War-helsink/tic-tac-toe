import Link from "next/link";
import type { UrlObject } from "url";

interface BottomLinkProps {
	text: string;
	linkText: string;
	url: UrlObject | __next_route_internal_types__.RouteImpl<string>;
}

export const BottomLink: React.FC<BottomLinkProps> = ({
	linkText,
	text,
	url,
}) => {
	return (
		<p className="text-xs text-primary/50">
			{text}{" "}
			<Link href={url} className="font-medium text-primary hover:underline">
				{linkText}
			</Link>
		</p>
	);
};
