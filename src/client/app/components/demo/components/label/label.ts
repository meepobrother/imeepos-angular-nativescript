// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'sd-label',
    templateUrl: 'label.html',
    styleUrls: ['label.scss']
})
export class Label implements OnInit {
    oneway = 'One way bound label';
    twoway = 'Two way bound label';
    counter: number;
    ngOnInit() {
        // absolute layout
    }
    constructor() {
        this.counter = 0;
    }

    changeLabelText() {
        this.twoway += ' Two way bound label ';
        this.counter += 1;
    }

    onTextChanged(args: any) {
        let label = <Label>args.object;
        console.log('onTextChanged for ' + this.counter + ' times for element ' + label);
    }
}
