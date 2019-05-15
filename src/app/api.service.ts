import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http } from '@angular/http';

import { QueueItem } from './models/queue-item';
import { QueueItemData } from './models/queue-item-data';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: Http) { }

	public getAllQueueItems(): Observable<QueueItem[]> {
		return this.http.get(API_URL + 'queueitems')
			.pipe(
				map(response => {
					const queueitems = response.json();
					return queueitems.map((queueitem) => new QueueItem(queueitem));
				}),
				catchError(this.handleError)
			);
	}

	public getQueueItemDataById(id: string): Observable<QueueItemData> {
		return this.http.get(API_URL + 'queueitemdata/' + id)
			.pipe(
				map(response => new QueueItemData(response.json())),
				catchError(this.handleError)
			);
	}

	// API: PUT /todos/:id
	public updateQueueItem() {
		return '';
	}

	public updateQueueItemDataById(queueItemData: QueueItemData): Observable<QueueItemData> {
		return this.http.put(API_URL + 'queueitemdata/' + queueItemData.id, queueItemData)
			.pipe(
				map(response => new QueueItemData(response.json())),
				catchError(this.handleError)
			);
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return throwError(error);
	}
}
