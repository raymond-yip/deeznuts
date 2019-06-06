import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import config from '../../okta.config';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	signIn: any;
	widget = new OktaSignIn({
		baseUrl: config.baseUrl
	});

	constructor(oktaAuth: OktaAuthService, router: Router) {
		// Show the widget when prompted, otherwise remove it from the DOM.
		router.events.forEach(event => {
			if (event instanceof NavigationStart) {
				switch (event.url) {
					case '/login':
					case '':
						break;
					default:
						this.widget.remove();
						break;
				}
			}
		});
		this.signIn = oktaAuth;
	}

	ngOnInit() {
		this.widget.renderEl({
			el: '#okta-signin-container'},
			(res) => {
				if (res.status === 'SUCCESS') {
					this.signIn.loginRedirect('', { sessionToken: res.session.token });
					// Hide the widget
					this.widget.hide();
				}
			},
			(err) => {
				throw err;
			}
		);
	}

}
