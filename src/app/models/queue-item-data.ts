export class QueueItemData {
	ID: string;
	XML: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
