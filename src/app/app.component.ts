import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'deeznuts';
	isAuthenticated: boolean;

	constructor(public oktaAuth: OktaAuthService, private router: Router) {
		// Subscribe to authentication state changes
		this.oktaAuth.$authenticationState.subscribe(
			(isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
		);
	}

	// tslint:disable-next-line:use-life-cycle-interface
	async ngOnInit() {
		this.isAuthenticated = await this.oktaAuth.isAuthenticated();
	}

	login() {
		this.oktaAuth.loginRedirect('/support/queue');
	}

	async logout() {
		await this.oktaAuth.logout();
		this.router.navigateByUrl('/');
	}
}
