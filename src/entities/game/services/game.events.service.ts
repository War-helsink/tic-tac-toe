import type { GameId } from "@/shared/types";
import { EventsChannel } from "@/shared/lib/events";
import type { GameEntity } from "../types";

type GameChanged = {
	type: "game-changed";
	data: GameEntity;
};

type GameCreated = {
	type: "game-created";
};

type GameEvent = GameChanged | GameCreated;

class GameEventsService {
	eventsChannel = new EventsChannel();

	async addGameChangedListener(
		gameId: GameId,
		listener: (event: GameChanged) => void,
	) {
		return this.eventsChannel.consume(`game:${gameId}`, (data) =>
			listener(data as GameChanged),
		);
	}

	async addGameCreatedListener(listener: (event: GameCreated) => void) {
		return this.eventsChannel.consume("game:created", (data) => {
			listener(data as GameCreated);
		});
	}

	emit(event: GameEvent) {
		if (event.type === "game-changed") {
			return this.eventsChannel.emit(`game:${event.data.id}`, event);
		}

		if (event.type === "game-created") {
			return this.eventsChannel.emit("game:created", event);
		}
	}
}

export const gameEvents = new GameEventsService();
