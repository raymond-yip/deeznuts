import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';

import { MaterialModule } from './components/material/material.module';
import { AceEditorModule } from 'ng2-ace-editor';
import { NotificationBarModule } from 'ngx-notification-bar/release';

import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

import { ViewQueueComponent } from './components/view-queue/view-queue.component';
import { XmlTransformComponent } from './components/xml-transform/xml-transform.component';
import { ViewQueueDataComponent } from './components/view-queue-data/view-queue-data.component';
import { ValidateXmlSchemaComponent } from './components/validate-xml-schema/validate-xml-schema.component';
import { ResendDialogComponent } from './components/resend-dialog/resend-dialog.component';
import { Base64Component } from './components/base64/base64.component';
import { LoginComponent } from './components/login/login.component';

import config from './okta.config';

const oktaConfig = Object.assign({
	onAuthRequired: ({oktaAuth, router}) => {
		router.navigate(['/login']);
	}
}, config.oidc);

// const appRoutes: Routes = [
// 	{ path: 'implicit/callback', component: OktaCallbackComponent },
// 	{ path: 'login', component: LoginComponent },
// 	{ path: '', component: ViewQueueComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired } },
// 	{ path: 'support/xsltransform', component: XmlTransformComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired } },
// 	{ path: 'support/validateschema', component: ValidateXmlSchemaComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired } }
// ];

@NgModule({
	declarations: [
		AppComponent,
		ViewQueueComponent,
		XmlTransformComponent,
		ViewQueueDataComponent,
		ValidateXmlSchemaComponent,
		ResendDialogComponent,
		LoginComponent
		// Base64Component
	],
	entryComponents: [
		ViewQueueDataComponent,
		ResendDialogComponent
	],
	imports: [
		OktaAuthModule.initAuth({
			issuer: oktaConfig.issuer,
			redirectUri: oktaConfig.redirectUri,
			clientId: oktaConfig.clientId,
			scope: oktaConfig.scope
		}),
		BrowserModule,
		HttpModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		AceEditorModule,
		NotificationBarModule,
		StorageServiceModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
