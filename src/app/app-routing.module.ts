import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import { ViewQueueComponent } from './components/view-queue/view-queue.component';
import { XmlTransformComponent } from './components/xml-transform/xml-transform.component';
import { ValidateXmlSchemaComponent } from './components/validate-xml-schema/validate-xml-schema.component';

export function onAuthRequired({ oktaAuth, router }) {
	router.navigate(['/login']);
}

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'implicit/callback', component: OktaCallbackComponent },
	{ path: '', component: ViewQueueComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired } },
	{ path: 'support/xsltransform', component: XmlTransformComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired } },
	{ path: 'support/validateschema', component: ValidateXmlSchemaComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired } }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
