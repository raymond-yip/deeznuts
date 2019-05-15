export class QueueItem {
	id: string;
	datetime: Date;
	source: string;
	target: string;
	status: string;
	errormessage: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
