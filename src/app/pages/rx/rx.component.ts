import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-rx',
    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.scss'],
})
export class RxComponent implements OnInit {
    time: Date;

    constructor() {
        this.time = new Date();
        console.log(window);
        console.log(Object.keys(document.body.style).filter(e => !e.match(/^webkit/)).length);
    }

    ngOnInit() {

    }

}
