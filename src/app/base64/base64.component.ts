import { Component, OnInit, Inject } from '@angular/core';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/mode/xml';
import 'brace/worker/xml';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const DATA_KEY = 'Data_Key';

@Component({
	selector: 'app-base64',
	templateUrl: './base64.component.html',
	styleUrls: ['./base64.component.css']
})
export class Base64Component implements OnInit {

	data: string;
	result: string;

	constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
		this.data = this.storage.get(DATA_KEY);
	}

	ngOnInit() {
	}

	encode() {
		return window.btoa(unescape(encodeURIComponent(this.data)));
	}

	decode() {
		return decodeURIComponent(escape(window.atob(this.data)));
	}

}
