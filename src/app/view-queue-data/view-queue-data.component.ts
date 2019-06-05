import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationBarService, NotificationType } from 'ngx-notification-bar/release';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/mode/xml';
import 'brace/worker/xml';
import { QueueItemData } from './../models/queue-item-data';
import { Observable } from 'rxjs';
import { QueueitemService } from '../queueitem.service';
import * as vkbeautify from 'vkbeautify';
import { ApiResponse } from '../models/api-response';

@Component({
	selector: 'app-view-queue-data',
	templateUrl: './view-queue-data.component.html',
	styleUrls: ['./view-queue-data.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ViewQueueDataComponent implements OnInit {

	id: string;
	xmlData: string;

	constructor(private queueItemService: QueueitemService, private notificationBarService: NotificationBarService,
		public dialogRef: MatDialogRef<ViewQueueDataComponent>, @Inject(MAT_DIALOG_DATA) data: QueueItemData) {
			this.id = data.ID;
			this.xmlData = vkbeautify.xml(data.XML);
	}

	ngOnInit() {}

	validateXML() {
		this.queueItemService.validateXml(this.xmlData).subscribe(
			x => {
				let notificationType = NotificationType.Warning;
				let delay = 3000;
				if (x.toString() === 'XML valid') {
					notificationType = NotificationType.Success;
					delay = 10000;
				}
				this.notificationBarService.create({ message: x.toString(), type: notificationType, hideDelay: delay });
			}
		);
	}

	validate() {
		this.queueItemService.validateData(this.xmlData).subscribe(
			x => {
				let notificationType = NotificationType.Warning;
				let delay = 3000;
				if (x.toString() === 'XML valid') {
					notificationType = NotificationType.Success;
					delay = 10000;
				}
				this.notificationBarService.create({ message: this.parseMessage(x.toString()), type: notificationType,
					isHtml: true, hideDelay: delay });
			}
		);
	}

	save() {
		this.updateData(<QueueItemData>{ ID: this.id, XML: this.xmlData }).subscribe(
			d => {
				let notificationType = NotificationType.Success;
				let delay = 3000;
				if (d.Status !== 'Success') {
					notificationType = NotificationType.Error;
					delay = 10000;
				}
				this.notificationBarService.create({ message: d.Status, type: notificationType,
					isHtml: true, hideDelay: delay });
				this.dialogRef.close();
			}
		);
	}

	close() {
		this.dialogRef.close();
	}

	updateData(queueItemData: QueueItemData): Observable<ApiResponse> {
		return this.queueItemService.updateQueueItemDataById(queueItemData);
	}

	private parseMessage(message: string): string {
		const oParser = new DOMParser();
		const oDOM = oParser.parseFromString(message, 'application/xml');
		let displayMessage: string = message;
		if (oDOM.documentElement.nodeName !== 'html') {
			displayMessage = '';
			for (let i  = 0; i < oDOM.getElementsByTagName('business_rule_failure').length; i++) {
				displayMessage += oDOM.getElementsByTagName('business_rule_failure')[i].childNodes[0].nodeValue + '<br/>';
			}
		}
		return displayMessage;
	}
}
