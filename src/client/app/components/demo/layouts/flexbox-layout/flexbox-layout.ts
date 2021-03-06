// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RouterExtensions } from '../../../../modules/core';
@Component({
    moduleId: module.id,
    selector: 'sd-flexbox-layout',
    templateUrl: 'flexbox-layout.html',
    styleUrls: ['flexbox-layout.css']
})
export class FlexboxLayoutComponent implements OnInit {
    type: string = 'row-reverse';

    constructor(
        public routerext: RouterExtensions,
    ) { }
    ngOnInit() {
        // absolute layout
    }

    onTap(link: any) {
        this.routerext.navigate(link, {
            transition: {
                duration: 300,
                name: 'slideTop'
            }
        });
    }
}
