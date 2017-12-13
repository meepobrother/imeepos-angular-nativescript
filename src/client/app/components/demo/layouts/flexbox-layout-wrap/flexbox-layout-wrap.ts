// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-wrap',
    templateUrl: 'flexbox-layout-wrap.html',
    styleUrls: ['flexbox-layout-wrap.scss']
})
export class FlexboxLayoutWrapComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
