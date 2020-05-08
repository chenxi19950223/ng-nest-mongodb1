import {Component, ElementRef, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {Navgetion, NavgetionService} from './navgetion.service';

import * as _ from 'lodash';
import {fromEvent, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    isCollapsed = false;
    navgetion: Navgetion[];

    src: any;

    theme = true;

    constructor(
        private navgetionService: NavgetionService,
        private sanitizer: DomSanitizer,
    ) {
        this.navgetion = this.navgetionService.navgetion;
    }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
    }

    onNav(nav): void {
        console.log(nav);
    }
}
