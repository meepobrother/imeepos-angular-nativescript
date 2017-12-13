// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout-space-around',
    templateUrl: 'flexbox-layout-space-around.html',
    styleUrls: ['flexbox-layout-space-around.scss']
})
export class FlexboxLayoutSpaceAroundComponent implements OnInit {
    type: string = 'row-reverse';
    ngOnInit() { 
        // absolute layout
    }
}
