import { Component, OnInit } from '@angular/core';
import { Navgetion, NavgetionService } from '../navgetion.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

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
