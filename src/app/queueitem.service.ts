import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { QueueItem } from './models/queue-item';
import { QueueItemData } from './models/queue-item-data';

@Injectable({
	providedIn: 'root'
})
export class QueueitemService {

	queueitems: QueueItem[] = [];

	constructor(private api: ApiService) { }

	getAllQueueItems(): Observable<QueueItem[]> {
		return this.api.getAllQueueItems();
	}

	resetQueueItemStatus(item: QueueItem): string {
		item.status = 'NEW';
		return this.api.updateQueueItem();

	}

	getQueueItemDataById(id: string): Observable<QueueItemData> {
		return this.api.getQueueItemDataById(id);
	}

	updateQueueItemDataById(queueItemData: QueueItemData): Observable<QueueItemData> {
		return this.api.updateQueueItemDataById(queueItemData);
	}
}
