import { GamesList } from "@/features/games-list";

const HomePage: React.FC = async () => {
	return (
		<main className="grow flex flex-col gap-8 container mx-auto px-4 pt-6">
			<h1 className="text-4xl font-bold">Games</h1>
			<GamesList />
		</main>
	);
};

export default HomePage;
