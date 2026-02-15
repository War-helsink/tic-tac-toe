import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui";

export const metadata: Metadata = {
	title: "Terms of use",
	description: "Terms of use",
};

const TermsOfServicePage: React.FC = () => {
	return (
		<Card className="border-0">
			<CardHeader>
				<CardTitle className="text-2xl">Privacy Policy</CardTitle>
			</CardHeader>

			<CardContent className="space-y-8 leading-relaxed text-sm text-muted-foreground">
				<section className="space-y-2 text-foreground">
					<h2 className="text-lg font-semibold">1. General Information</h2>
					<p>
						This Privacy Policy explains how we collect, use, and protect
						information related to users of the online Tic-Tac-Toe game.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						2. Information We May Collect
					</h2>
					<ul className="list-disc pl-6 space-y-1">
						<li>Player name or nickname.</li>
						<li>Email address (if registration is required).</li>
						<li>IP address and browser technical data.</li>
						<li>Game statistics (wins, losses, match history).</li>
					</ul>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						3. Purpose of Data Processing
					</h2>
					<ul className="list-disc pl-6 space-y-1">
						<li>To provide game functionality and player connections.</li>
						<li>To maintain security and prevent fraud.</li>
						<li>To improve service quality and features.</li>
					</ul>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						4. Data Sharing
					</h2>
					<p>
						We do not sell users’ personal data. Data may only be shared with
						trusted technical providers (such as hosting or analytics services)
						to ensure proper operation of the Service.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						5. Data Storage and Security
					</h2>
					<p>
						We implement technical and organizational measures to protect your
						data. However, no method of transmission over the internet is 100%
						secure.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						6. User Rights
					</h2>
					<p>
						You have the right to access, correct, or delete your personal data.
						To exercise these rights, please contact us through the website.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						7. Changes to This Policy
					</h2>
					<p>
						We may update this Privacy Policy from time to time. The latest
						version will always be available on this page. Last updated:
						February 13, 2026.
					</p>
				</section>
			</CardContent>
		</Card>
	);
};

export default TermsOfServicePage;
