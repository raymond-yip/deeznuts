import { Component, OnInit } from '@angular/core';
import { QueueitemService } from './../queueitem.service';
import { QueueItem } from './../models/queue-item';
import { QueueItemData } from './../models/queue-item-data';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';

import { DataSource } from '@angular/cdk/collections';
import { Observable, throwError } from 'rxjs';
import { ViewQueueDataComponent } from '../view-queue-data/view-queue-data.component';

@Component({
	selector: 'app-view-queue',
	templateUrl: './view-queue.component.html',
	styleUrls: ['./view-queue.component.css'],
	providers: [QueueitemService]
})
export class ViewQueueComponent implements OnInit {
	title = 'View Queue Items';
	queueItemDataSource = new QueueItemDataSource(this.queueItemService);
	displayedColumns = ['id', 'datetime', 'source', 'target', 'status', 'errormessage', 'action'];

	constructor(private queueItemService: QueueitemService, private dialog: MatDialog) { }

	/* Open resend dialog to reset status to 'NEW' and resend message to Atom Queue */
	openResendDialog(uid: string, target: string) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.height = '300px';
		dialogConfig.width = '300px';

		dialogConfig.data = {
			id: uid,
			target: target
		};

		// TODO: replace with actual component
		const dialogRef = this.dialog.open(ViewQueueDataComponent, dialogConfig);

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
					id: d.id,
					xml: d.data
				};
			}, this.handleError, function() {
				const dialogRef = Dialog.open(ViewQueueDataComponent, dialogConfig);

				dialogRef.afterClosed().subscribe(
					data => {
						if (data !== undefined) {
							console.log(data.id);
						}
					}
				);
			}
		);
	}

	ngOnInit() { }

	getData(id: string): Observable<QueueItemData> {
		return this.queueItemService.getQueueItemDataById(id);
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
