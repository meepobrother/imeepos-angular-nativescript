// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-multi',
    templateUrl: 'flexbox-layout-multi.html',
    styleUrls: ['flexbox-layout-multi.scss']
})
export class FlexboxLayoutMultiComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
