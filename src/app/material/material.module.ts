import { NgModule } from '@angular/core';

import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatGridListModule,
	MatTableModule,
	MatDialogModule,
	MatPaginatorModule,
	MatCheckboxModule
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
		MatDialogModule,
		MatPaginatorModule,
		MatCheckboxModule
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatGridListModule,
		MatTableModule,
		MatDialogModule,
		MatPaginatorModule,
		MatCheckboxModule
	]
})
export class MaterialModule { }
