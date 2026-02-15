import { GamesList } from "@/features/games-list";

const HomePage: React.FC = async () => {
	return (
		<div className="flex flex-col gap-8 container mx-auto pt-[100px]">
			<h1 className="text-4xl font-bold">Games</h1>
			<GamesList />
		</div>
	);
};

export default HomePage;
