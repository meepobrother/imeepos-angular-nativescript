// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-row-reverse',
    templateUrl: 'flexbox-layout-row-reverse.html',
    styleUrls: ['flexbox-layout-row-reverse.scss']
})
export class FlexboxLayoutRowReverseComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
