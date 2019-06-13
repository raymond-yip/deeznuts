export interface IAppConfig {
		environment: {
				production: boolean,
				name: string,
				apiUrl: string,
				okta: {
						oidc: {
										issuer: string,
										redirectUri: string,
										clientId: string,
										scope: 'openid profile email',
										testing: {
												disableHttpsCheck: boolean
										}
						},
						baseUrl: string,
						apiKey: string
				}
		};
}
