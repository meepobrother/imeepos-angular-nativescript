// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RouterExtensions } from '../../../../modules/core';
@Component({
    moduleId: module.id,
    selector: 'sd-components',
    templateUrl: 'components.html',
    styleUrls: ['components.scss']
})
export class ComponentsIndex implements OnInit {
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
