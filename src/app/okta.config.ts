import { AppConfig } from '../app.config';

export default {
		oidc: {
				issuer: AppConfig.settings.environment.okta.oidc.issuer,
				redirectUri: AppConfig.settings.environment.okta.oidc.redirectUri,
				clientId: AppConfig.settings.environment.okta.oidc.clientId,
				scope: AppConfig.settings.environment.okta.oidc.scope,
				testing: {
					disableHttpsCheck: AppConfig.settings.environment.okta.oidc.testing.disableHttpsCheck
				}
		},
		baseUrl: AppConfig.settings.environment.okta.baseUrl
};
