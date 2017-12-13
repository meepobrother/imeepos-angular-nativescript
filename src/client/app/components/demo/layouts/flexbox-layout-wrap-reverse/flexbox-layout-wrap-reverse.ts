// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-wrap-reverse',
    templateUrl: 'flexbox-layout-wrap-reverse.html',
    styleUrls: ['flexbox-layout-wrap-reverse.scss']
})
export class FlexboxLayoutWrapReserveComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
