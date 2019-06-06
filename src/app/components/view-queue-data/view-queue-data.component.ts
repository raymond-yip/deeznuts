import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NotificationBarService, NotificationType } from 'ngx-notification-bar/release';

import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/theme-monokai';

import { QueueItemData } from '../../models/queue-item-data';
import { Observable } from 'rxjs';
import { QueueitemService } from '../../queueitem.service';
import * as vkbeautify from 'vkbeautify';
import { ApiResponse } from '../../models/api-response';

@Component({
	selector: 'app-view-queue-data',
	templateUrl: './view-queue-data.component.html',
	styleUrls: ['./view-queue-data.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ViewQueueDataComponent implements OnInit {

	id: string;
	xmlData: string;
	notificationDelay = 3000;

	constructor(private queueItemService: QueueitemService, private snackBar: MatSnackBar,
		public dialogRef: MatDialogRef<ViewQueueDataComponent>, @Inject(MAT_DIALOG_DATA) data: QueueItemData) {
			this.id = data.ID;
			this.xmlData = vkbeautify.xml(data.XML);
	}

	ngOnInit() {}

	save() {
		// validate XML against schema
		this.queueItemService.validateXml(this.xmlData).subscribe(
			x => {
				if (x.toString() !== 'XML valid') {
					// validate XML data against business rules
					this.queueItemService.validateData(this.xmlData).subscribe(
						y => {
							if (y.toString() !== 'XML valid') {
								// update XML
								this.queueItemService.updateQueueItemDataById({ ID: this.id, XML: this.xmlData }).subscribe(
									d => {
										this.snackBar.open(d.Status, null, {
											duration: this.notificationDelay
										});
										if (d.Status === 'Success') {
											this.dialogRef.close();
										}
									}
								);
							} else {
								this.snackBar.open(this.parseMessage(y.toString()), null, {
									duration: this.notificationDelay
								});
							}
						}
					);
				} else {
					this.snackBar.open(x.toString(), null, {
						duration: this.notificationDelay
					});
				}
			}
		);
	}

	close() {
		this.dialogRef.close();
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
