export const environment = {
	production: true,
	apiUrl: '#{BoomiUrl}',
	okta: {
		oidc: {
				issuer: '#{OktaIssuer}',
				redirectUri: '#{OktaRedirectUri}',
				clientId: '#{OktaClientID}',
				scope: 'openid profile email',
				testing: {
					disableHttpsCheck: false
				}
		},
		baseUrl: '#{OktaBaseUrl}',
		apiKey: '#{OktaApiKey}'
	}
};
