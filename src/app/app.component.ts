import { Component, OnInit } from '@angular/core';

import {Navgetion, NavgetionService} from './navgetion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    isCollapsed = false;
    navgetion: Navgetion[];

    constructor(
        private navgetionService: NavgetionService
    ) {
        this.navgetion = this.navgetionService.navgetion;
    }

    ngOnInit(): void {
    }

}
