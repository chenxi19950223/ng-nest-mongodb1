import { Component, ElementRef, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Navgetion, NavgetionService } from './navgetion.service';

import * as _ from 'lodash';
import { fromEvent, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SimpleReuseStrategy } from './SimpleReuseStrategy';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [SimpleReuseStrategy],
})
export class AppComponent {
    title = 'app';

    menuList: Array<{ module: string }> = [];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {
// //路由事件
//         this.router.events.filter(event => event instanceof NavigationEnd)
//             .map(() => this.activatedRoute)
//             .map(route => {
//                 while (route.firstChild) route = route.firstChild;
//                 return route;
//             })
//             .filter(route => route.outlet === 'primary')
//             .mergeMap(route => route.data)
//             .subscribe((event) => {
//                 var menu = { module: event["module"]};
//                 this.menuList.push(menu);
//             });
    }
}
