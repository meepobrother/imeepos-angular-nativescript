// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-row',
    templateUrl: 'flexbox-layout-row.html',
    styleUrls: ['flexbox-layout-row.scss']
})
export class FlexboxLayoutRowComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() {
        // absolute layout
    }
}
