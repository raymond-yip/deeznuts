import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatGridListModule,
	MatTableModule,
	MatDialogModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatGridListModule,
		MatTableModule,
		MatDialogModule
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatGridListModule,
		MatTableModule,
		MatDialogModule
	]
})
export class MaterialModule { }
