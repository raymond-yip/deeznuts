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
	MatPaginator
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
		MatPaginator
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
		MatPaginator
	]
})
export class MaterialModule { }
