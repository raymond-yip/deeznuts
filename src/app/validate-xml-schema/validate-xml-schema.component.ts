import { Component, OnInit } from '@angular/core';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/mode/xml';
import 'brace/worker/xml';

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
