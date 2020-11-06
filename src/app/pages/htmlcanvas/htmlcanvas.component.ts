import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import html2canvas from 'html2canvas';
import { HtmlcanvasService } from './htmlcanvas.service';

@Component({
    selector: 'app-htmlcanvas',
    templateUrl: './htmlcanvas.component.html',
    styleUrls: ['./htmlcanvas.component.scss']
})
export class HtmlcanvasComponent implements OnInit, AfterViewInit {
    @ViewChild('can', {static: true}) can: ElementRef<HTMLDivElement>;

    constructor(
        private htmlcanvasService: HtmlcanvasService
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.htmlcanvasService.dowloadImg(this.can.nativeElement);
        }, 1000);
    }

}
