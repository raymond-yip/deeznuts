export class TriggerWritebackRequest {
	UID: string;
	Target: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
