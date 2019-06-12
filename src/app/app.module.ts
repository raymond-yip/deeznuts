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

import { AppOverlayModule } from './services/overlay/overlay.module';
import { ProgressSpinnerModule } from './components/progress-spinner/progress-spinner.module';

import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

import { ViewQueueComponent } from './components/view-queue/view-queue.component';
import { XmlTransformComponent } from './components/xml-transform/xml-transform.component';
import { ViewQueueDataComponent } from './components/view-queue-data/view-queue-data.component';
import { LoginComponent } from './components/login/login.component';

import config from './okta.config';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

const oktaConfig = Object.assign({
	onAuthRequired: ({oktaAuth, router}) => {
		router.navigate(['/login']);
	}
}, config.oidc);

@NgModule({
	declarations: [
		AppComponent,
		ViewQueueComponent,
		XmlTransformComponent,
		ViewQueueDataComponent,
		LoginComponent,
		ModalDialogComponent
	],
	entryComponents: [
		ViewQueueDataComponent,
		ProgressSpinnerComponent,
		ModalDialogComponent
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
		StorageServiceModule,
		AppOverlayModule,
		ProgressSpinnerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
