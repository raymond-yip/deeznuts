import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';

import { ApiResponse } from '../../models/api-response';
import { QueueItem } from '../../models/queue-item';
import { QueueItemData } from '../../models/queue-item-data';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { TriggerWritebackRequest } from '../../models/trigger-writeback-request';

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: Http) { }

	public getAllQueueItems(): Observable<QueueItem[]> {
		return this.http.get(API_URL + 'ws/rest/support/v1/ClientSolution/ListQueueItems?target=TCSStaging')
			.pipe(
				map(response => {
					const queueitems = response.json();
					return queueitems.map((queueitem) => new QueueItem(queueitem));
				}),
				catchError(this.handleError)
			);
	}

	public getQueueItemDataById(id: string): Observable<QueueItemData> {
		return this.http.get(API_URL + 'ws/rest/support/v1/ClientSolution/QueueItemData?uid=' + id)
			.pipe(
				map(response => new QueueItemData(response.json())),
				catchError(this.handleError)
			);
	}

	public updateQueueItem(request: TriggerWritebackRequest[], user: string): Observable<ApiResponse> {
		return this.http.post(API_URL + 'ws/rest/support/v1/ClientSolution/TriggerWriteback', request,
		new RequestOptions({ headers: new Headers({ User: user}) }))
			.pipe(
				map(response => new ApiResponse(response.json())),
				catchError(this.handleError)
			);
	}

	public updateQueueItemDataById(queueItemData: QueueItemData, user: string): Observable<ApiResponse> {
		return this.http.post(API_URL + 'ws/rest/support/v1/ClientSolution/QueueItemData', queueItemData,
		new RequestOptions({ headers: new Headers({ User: user}) }))
			.pipe(
				map(response => new ApiResponse(response.json())),
				catchError(this.handleError)
			);
	}

	public validateXml(xml: string): Observable<string> {
		return this.http.post(API_URL + 'ws/rest/support/v1/ClientSolution/SchemaValidation', xml)
			.pipe(
				map(response => response.text()),
				catchError(this.handleError)
			);
	}

	public validateData(xml: string): Observable<string> {
		return this.http.post(API_URL + 'ws/rest/support/v1/ClientSolution/Validation', xml)
			.pipe(
				map(response => response.text()),
				catchError(this.handleError)
			);
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return throwError(error);
	}
}
