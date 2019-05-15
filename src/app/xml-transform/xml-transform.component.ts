import { Component, OnInit, Inject } from '@angular/core';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import 'brace/mode/xml';
import 'brace/worker/xml';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const XML_KEY = 'XML_Data_Key';
const XSL_KEY = 'XSL_Template_Key';

@Component({
	selector: 'app-xml-transform',
	templateUrl: './xml-transform.component.html',
	styleUrls: ['./xml-transform.component.css']
})
export class XmlTransformComponent implements OnInit {

	xmlData: string;
	xslTemplate: string;
	result: string;

	constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
		this.xmlData = this.storage.get(XML_KEY);
		this.xslTemplate = this.storage.get(XSL_KEY);
		this.result = this.transformXml(window, document, this.xmlData, this.xslTemplate);
	}

	ngOnInit() {
	}

	transform() {
		this.storage.set(XML_KEY, this.xmlData);
		this.storage.set(XSL_KEY, this.xslTemplate);
		this.result = this.transformXml(window, document, this.xmlData, this.xslTemplate);
	}

	transformXml (window, document, xml, xslt): string {
		if (!xml || !xslt) {
				return 'No' + (!xml ? ' XML' : '') + (!xml && !xslt ? ' &' : '') + (!xslt ? ' XSLT' : '');
		}

		let processor, output, xmlDoc, xsltDoc;
		let err;

		xmlDoc = (new DOMParser()).parseFromString(xml, 'text/xml');
		if (err = this.getParserError(xmlDoc)) {
				return 'XML parse error: ' + err;
		}

		xsltDoc = (new DOMParser()).parseFromString(xslt, 'text/xml');
		if (err = this.getParserError(xsltDoc)) {
				return 'XSLT parse error: ' + err;
		}

		processor = new XSLTProcessor();
		processor.importStylesheet(xsltDoc);

		output = (new XMLSerializer()).serializeToString(processor.transformToFragment(xmlDoc, document));

		return output;
	}

	getParserError (document): string {
		let err: any;
		if (err = document.getElementsByTagName('parsererror')[0]) {
				return err.textContent ? err.textContent.split('\n', 1)[0] : 'unknown parser error';
		}

		return null;
	}
}
