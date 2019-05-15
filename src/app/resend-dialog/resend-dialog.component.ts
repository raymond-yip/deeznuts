import { Component, OnInit } from '@angular/core';
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

	constructor() { }

	ngOnInit() {
	}

	reset() {

	}

}
