import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QueueitemService } from '../../queueitem.service';
import { QueueItem } from '../../models/queue-item';
import { QueueItemData } from '../../models/queue-item-data';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { OktaAuthService } from '@okta/okta-angular';

import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Observable, throwError } from 'rxjs';
import { ViewQueueDataComponent } from '../view-queue-data/view-queue-data.component';
import { ParserError } from '@angular/compiler';
import { ResendDialogComponent } from '../resend-dialog/resend-dialog.component';
import { TriggerWritebackRequest } from '../../models/trigger-writeback-request';
import { NotificationBarService, NotificationType } from 'ngx-notification-bar/release';
import { load } from '@angular/core/src/render3';

@Component({
	selector: 'app-view-queue',
	templateUrl: './view-queue.component.html',
	styleUrls: ['./view-queue.component.css'],
	providers: [QueueitemService]
})
export class ViewQueueComponent implements OnInit {

	title = 'View Queue Items';
	disableResendSelectedButtonRef = true;
	queueItemDataSource: MatTableDataSource<QueueItem>;
	selection = new SelectionModel<QueueItem>(true, []);
	displayedColumns = ['select', 'id', 'datetime', 'target', 'status', 'errormessage', 'action'];
	userName: string;
	notificationDelay = 5000;

	constructor(private queueItemService: QueueitemService, private dialog: MatDialog,
		public oktaAuth: OktaAuthService, private snackBar: MatSnackBar) {
			this.load();
		}

	private load() {
		this.queueItemService.getAllQueueItems().subscribe( x => {
			this.queueItemDataSource = new MatTableDataSource<QueueItem>(x);
		});
	}

	parseMessage(message: string): string {
		const oParser = new DOMParser();
		const oDOM = oParser.parseFromString(message, 'application/xml');
		const displayMessage = (oDOM.documentElement.nodeName === 'html' ? message :
			oDOM.getElementsByTagName('Exception')[0].childNodes[0].nodeValue);
		return displayMessage;
	}

	formatDate(date: string): string {
		const y = date.substring(0, 4);
		const M = date.substring(4, 6);
		const d = date.substring(6, 8);
		const h = date.substring(9, 11);
		const m = date.substring(11, 13);
		const s = date.substring(13, 15);
		return `${d}-${M}-${y} ${h}:${m}:${s}`;
	}

	/* Open resend dialog to reset status to 'NEW' and resend message to Atom Queue */
	openResendDialog(uid: string, target: string) {
		const Dialog: MatDialog = this.dialog;
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.height = '250px';
		dialogConfig.width = '300px';

		dialogConfig.data = {
			id: uid,
			target: target
		};

		const dialogRef = Dialog.open(ResendDialogComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(
			// TODO: remove item from grid
		);
	}

	/* Open edit dialog to update XML for queue item */
	openEditDialog(uid: string) {
		const Dialog: MatDialog = this.dialog;
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.height = '70%';
		dialogConfig.width = '70%';

		this.getData(uid).subscribe(
			d => {
				dialogConfig.data = {
					ID: d.ID,
					XML: d.XML
				};
			}, this.handleError, function() {
				const dialogRef = Dialog.open(ViewQueueDataComponent, dialogConfig);

				dialogRef.afterClosed().subscribe(
					data => {
						if (data !== undefined) {
							console.log(data.ID);
						}
					}
				);
			}
		);
	}

	ngOnInit() { }

	private getData(id: string): Observable<QueueItemData> {
		return this.queueItemService.getQueueItemDataById(id);
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.queueItemDataSource.data.length;
		return numSelected === numRows;
	}

	masterToggle() {
		this.isAllSelected() ?
		this.selection.clear() :
		this.queueItemDataSource.data.forEach(row => this.selection.select(row));
	}

	resendSelected() {
		let uids: TriggerWritebackRequest[] = [];
		this.selection.selected.forEach( q => {
			uids.push({UID: q.ID, Target: q.Target});
		});
		console.log(JSON.stringify(uids));
		if (uids.length > 0) {
			this.queueItemService.resetQueueItemStatus(uids).subscribe(
				r => {
					if (r.Status === 'Success') {
						this.selection.selected.forEach(item => {
							const index: number = this.queueItemDataSource.data.findIndex(d => d === item);
							this.queueItemDataSource.data.splice(index, 1);
							this.queueItemDataSource._updateChangeSubscription();
						});
						this.selection = new SelectionModel<QueueItem>(true, []);
					}
					this.snackBar.open(r.Message, null, {
						duration: this.notificationDelay
					});
				}
			);
		}
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return throwError(error);
	}
}

export class QueueItemDataSource extends DataSource<any> {
	constructor(private queueItemService: QueueitemService) {
		super();
	}
	connect(): Observable<QueueItem[]> {
		return this.queueItemService.getAllQueueItems();
	}
	disconnect() {}
}
