"use client";

import type { GameEntity } from "@/entities/game";

interface GameFieldProps {
	game: GameEntity;
	onCellClick?: (index: number) => void;
}

export const GameField: React.FC<GameFieldProps> = ({ game, onCellClick }) => {
	return (
		<div className="grid grid-cols-3">
			{game.field.map((sybmol, index) => (
				<button
					className="border border-primary w-10 h-10 flex justify-center items-center cursor-pointer"
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
