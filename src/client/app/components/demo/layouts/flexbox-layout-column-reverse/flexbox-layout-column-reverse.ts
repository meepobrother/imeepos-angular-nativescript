// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-column-reverse',
    templateUrl: 'flexbox-layout-column-reverse.html',
    styleUrls: ['flexbox-layout-column-reverse.scss']
})
export class FlexboxLayoutColumnReverseComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
