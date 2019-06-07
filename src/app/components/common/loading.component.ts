import { Component, OnInit } from '@angular/core';
import { MatProgressBar } from '@angular/material';

@Component({
    selector: 'app-loading-panel',
    template: '<div class="loading-panel"><mat-progress-bar mode="indeterminate"></mat-progress-bar></div>',
    styles: [ '.loading-panel { position:relative; display:block; width:100%; height:100%; padding:16px; margin:2em auto; }' ]
})
export class LoadingPanelComponent { }
