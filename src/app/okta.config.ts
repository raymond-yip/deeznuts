export default {
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
};
