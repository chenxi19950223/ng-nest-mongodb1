import { Component, OnInit } from '@angular/core';
import { Navgetion, NavgetionService } from '../navgetion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LeadDemoService } from '../component/lead-demo/lead-demo.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {

    isCollapsed = false;
    navgetion: Navgetion[];

    src: any;

    theme = true;


    constructor(
        private navgetionService: NavgetionService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private leadDemoService: LeadDemoService
    ) {
        this.navgetion = this.navgetionService.navgetion;
    }

    ngOnInit(): void {
    }
    onNav(nav): void {
        console.log(nav);
    }

    open(): void {
        this.leadDemoService.open();
    }

}
