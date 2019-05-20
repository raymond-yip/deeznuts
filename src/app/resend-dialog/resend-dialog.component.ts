import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QueueitemService } from '../queueitem.service';
import { QueueItemData } from '../models/queue-item-data';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/mode/xml';

@Component({
	selector: 'app-resend-dialog',
	templateUrl: './resend-dialog.component.html',
	styleUrls: ['./resend-dialog.component.css']
})
export class ResendDialogComponent implements OnInit {

	id: string;

	constructor(private queueItemService: QueueitemService, private dialog: MatDialog,
		public dialogRef: MatDialogRef<ResendDialogComponent>, @Inject(MAT_DIALOG_DATA) data: QueueItemData) { }

	ngOnInit() {
	}

	reset() {

	}

	close() {
		this.dialogRef.close();
	}

}
