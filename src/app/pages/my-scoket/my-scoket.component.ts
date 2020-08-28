import { Component, OnInit } from '@angular/core';

import { MySockectService } from './my-sockect.service';

@Component({
    selector: 'app-my-scoket',
    templateUrl: './my-scoket.component.html',
    styleUrls: ['./my-scoket.component.scss']
})
export class MyScoketComponent implements OnInit {
    i = 0;

    constructor(
        private mySockectService: MySockectService
    ) {
    }

    ngOnInit(): void {
        this.scoket();
    }

    scoket(): void {
        console.log(1);
        this.mySockectService.onNewMessage().subscribe(msg => {
            console.log(msg);
        });
        this.mySockectService.sendMessage('asdf');
    }

    btn(): void {
        this.i++;
        this.mySockectService.emit(this.i);
    }

}
