import { Component, OnInit } from '@angular/core';

import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/theme-monokai';

@Component({
	selector: 'app-validate-xml-schema',
	templateUrl: './validate-xml-schema.component.html',
	styleUrls: ['./validate-xml-schema.component.css']
})
export class ValidateXmlSchemaComponent implements OnInit {

	xmlData: string;

	constructor() { }

	ngOnInit() {
	}

}
