import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { QueueItem } from '../../models/queue-item';
import { QueueItemData } from '../../models/queue-item-data';
import { ApiResponse } from '../../models/api-response';
import { TriggerWritebackRequest } from '../../models/trigger-writeback-request';

@Injectable({
	providedIn: 'root'
})
export class QueueitemService {

	queueitems: QueueItem[] = [];

	constructor(private api: ApiService) { }

	getAllQueueItems(): Observable<QueueItem[]> {
		return this.api.getAllQueueItems();
	}

	resetQueueItemStatus(request: TriggerWritebackRequest[], user: string): Observable<ApiResponse> {
		return this.api.updateQueueItem(request, user);

	}

	getQueueItemDataById(id: string): Observable<QueueItemData> {
		return this.api.getQueueItemDataById(id);
	}

	updateQueueItemDataById(queueItemData: QueueItemData, user: string): Observable<ApiResponse> {
		return this.api.updateQueueItemDataById(queueItemData, user);
	}

	validateXml(xml: string): Observable<string> {
		return this.api.validateXml(xml);
	}

	validateData(xml: string): Observable<string> {
		return this.api.validateData(xml);
	}
}
