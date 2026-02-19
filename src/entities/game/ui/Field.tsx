"use client";

import type { GameEntity } from "@/entities/game";

interface GameFieldProps {
	game: GameEntity;
	onCellClick?: (index: number) => void;
}

export const GameField: React.FC<GameFieldProps> = ({ game, onCellClick }) => {
	return (
		<div className="grid grid-cols-3 gap-1">
			{game.field.map((sybmol, index) => (
				<button
					className="w-15 h-15 flex justify-center items-center aspect-square text-2xl font-bold rounded-xl bg-muted cursor-pointer"
					key={index}
					onClick={() => onCellClick?.(index)}
					type="button"
				>
					{sybmol ?? ""}
				</button>
			))}
		</div>
	);
};
