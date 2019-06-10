// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: 'https://devboomi.cccs.co.uk/',
	okta: {
		oidc: {
				issuer: 'https://dev-562342.okta.com/oauth2/default',
				redirectUri: 'http://localhost:4200/implicit/callback',
				clientId: '0oaoe7te5wlHKxCog356',
				scope: 'openid profile email',
				testing: {
					disableHttpsCheck: false
				}
		},
		baseUrl: 'https://dev-562342.okta.com'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
