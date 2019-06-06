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
	MatCheckboxModule,
	MatSnackBarModule
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
		MatCheckboxModule,
		MatSnackBarModule
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
		MatCheckboxModule,
		MatSnackBarModule
	]
})
export class MaterialModule { }
