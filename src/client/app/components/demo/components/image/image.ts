// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

const URL:string = 'https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_logo.png';

@Component({
    moduleId: module.id,
    selector: 'sd-image',
    templateUrl: 'image.html',
    styleUrls: ['image.scss']
})
export class ImageDemo implements OnInit {
    public newImage: any;
    public newLabel: any;

    onStackLoaded(args) {
        let stackView = args.object;

        // this.newImage = new Image();
        // this.newImage.src = URL;
        // this.newImage.stretch = "none";
        // this.newImage.style.margin = "15";

        // this.newLabel = new Label();
        // this.newLabel.text = "Image loaded from code behind";
        // this.newLabel.style.margin = "15";

        // stackView.addChild(this.newLabel);
        // stackView.addChild(this.newImage);
    }
    ngOnInit() {
        // absolute layout
    }

}
