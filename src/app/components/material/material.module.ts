import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

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
	MatSnackBarModule,
	MatProgressSpinnerModule,
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
		MatSnackBarModule,
		MatProgressSpinnerModule,
		OverlayModule
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
		MatSnackBarModule,
		MatProgressSpinnerModule,
		OverlayModule
	]
})
export class MaterialModule { }
