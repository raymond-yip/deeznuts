import { environment } from '../environments/environment';

export default {
		oidc: {
				issuer: environment.okta.oidc.issuer,
				redirectUri: environment.okta.oidc.redirectUri,
				clientId: environment.okta.oidc.clientId,
				scope: environment.okta.oidc.scope,
				testing: {
					disableHttpsCheck: false
				}
		},
		baseUrl: environment.okta.baseUrl
};
