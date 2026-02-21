import diff from "microdiff";

export function hasObjectChanged(obj1: object, obj2: object): boolean {
	const differences = diff(obj1, obj2);
	return differences.length > 0;
}
