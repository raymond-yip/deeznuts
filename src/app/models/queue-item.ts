export class QueueItem {
	ID: string;
	CreatedDateTime: Date;
	Source: string;
	Target: string;
	Status: string;
	Message: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
