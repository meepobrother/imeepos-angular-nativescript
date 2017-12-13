// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-space-between',
    templateUrl: 'flexbox-layout-space-between.html',
    styleUrls: ['flexbox-layout-space-between.scss']
})
export class FlexboxLayoutSpaceBetweenComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
