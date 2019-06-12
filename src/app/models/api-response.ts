export class ApiResponse {
	Status: string;
	Message: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
