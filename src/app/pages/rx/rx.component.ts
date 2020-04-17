import {Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-rx',
    templateUrl: './rx.component.html',
    styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        const json = {a: 1};
        console.log(JSON.stringify(json));
        const obs = new Observable(obsv => {
            obsv.next('aaa');
            obsv.error('bbb');
        });
        obs.subscribe({
            next(res) {
                console.log(res);
            },
            error(err) {
                console.log(err);
            }
        });
    }

}
