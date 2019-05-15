import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class G006SupportService {

	constructor(private http: Http) { }
}
