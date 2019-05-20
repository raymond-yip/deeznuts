import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { AceEditorModule } from 'ng2-ace-editor';
import { NotificationBarModule } from 'ngx-notification-bar/release';

import { ViewQueueComponent } from './view-queue/view-queue.component';
import { XmlTransformComponent } from './xml-transform/xml-transform.component';
import { ViewQueueDataComponent } from './view-queue-data/view-queue-data.component';
import { ValidateXmlSchemaComponent } from './validate-xml-schema/validate-xml-schema.component';
import { ResendDialogComponent } from './resend-dialog/resend-dialog.component';
import { Base64Component } from './base64/base64.component';

const appRoutes: Routes = [
	{ path: '', component: ViewQueueComponent },
	{ path: 'support/xsltransform', component: XmlTransformComponent },
	{ path: 'support/validateschema', component: ValidateXmlSchemaComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ViewQueueComponent,
		XmlTransformComponent,
		ViewQueueDataComponent,
		ValidateXmlSchemaComponent,
		ResendDialogComponent// ,
		// Base64Component
	],
	entryComponents: [
		ViewQueueDataComponent,
		ResendDialogComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes, { enableTracing: true }), // tracing enabled for debugging
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
