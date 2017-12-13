// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-flex-end',
    templateUrl: 'flexbox-layout-flex-end.html',
    styleUrls: ['flexbox-layout-flex-end.scss']
})
export class FlexboxLayoutFlexEndComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
