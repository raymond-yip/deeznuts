import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalMessage } from '../../models/modal-message';

@Component({
	selector: 'app-modal-dialog',
	templateUrl: './modal-dialog.component.html',
	styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

	Message: string;

	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ModalDialogComponent>, @Inject(MAT_DIALOG_DATA) data: ModalMessage) {
		this.Message = data.Message;
	}

	ngOnInit() {
	}

	close() {
		this.dialogRef.close();
	}

}
