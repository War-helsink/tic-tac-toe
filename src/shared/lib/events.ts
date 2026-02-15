import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export class EventsChannel {
	async emit(key: string, data: unknown) {
		await redis.publish(key, data);
	}

	async consume(key: string, listener: (data: unknown) => void) {
		const subscription = redis.subscribe(key);

		subscription.on("message", (message) => {
			listener(message.message);
		});

		return () => subscription.unsubscribe();
	}
}
