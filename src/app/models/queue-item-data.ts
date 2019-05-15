export class QueueItemData {
	id: string;
	data: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
