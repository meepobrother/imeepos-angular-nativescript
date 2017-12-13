// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-shrink',
    templateUrl: 'flexbox-layout-shrink.html',
    styleUrls: ['flexbox-layout-shrink.scss']
})
export class FlexboxLayoutShrinkComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
