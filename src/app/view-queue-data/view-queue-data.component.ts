import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/mode/xml';
import 'brace/worker/xml';
import { QueueItemData } from './../models/queue-item-data';
import { Observable } from 'rxjs';
import { QueueitemService } from '../queueitem.service';

@Component({
	selector: 'app-view-queue-data',
	templateUrl: './view-queue-data.component.html',
	styleUrls: ['./view-queue-data.component.css']
})
export class ViewQueueDataComponent implements OnInit {

	id: string;
	xmlData: string;

	constructor(private queueItemService: QueueitemService,
		public dialogRef: MatDialogRef<ViewQueueDataComponent>, @Inject(MAT_DIALOG_DATA) data) {
		this.id = data.id;
		this.xmlData = data.xml;
	}

	ngOnInit() {}

	validateXML() {}

	validate() {}

	save() {
		console.log('save?!');
		this.updateData(<QueueItemData>{ id: this.id, data: this.xmlData }).subscribe(
			d => {
				this.dialogRef.close(<QueueItemData>{ id: d.id, data: d.data });
			}
		);
	}

	close() {
		this.dialogRef.close();
	}

	updateData(queueItemData: QueueItemData): Observable<QueueItemData> {
		return this.queueItemService.updateQueueItemDataById(queueItemData);
	}
}
