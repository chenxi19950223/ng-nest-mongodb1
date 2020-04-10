import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {Navgetion, NavgetionService} from './navgetion.service';

import * as _ from 'lodash';
import {fromEvent, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isCollapsed = false;
    navgetion: Navgetion[];
    @ViewChild('aaa', {static: true}) canvasRef: ElementRef<HTMLCanvasElement>;
    canvasImage: CanvasRenderingContext2D;


    constructor(
        private navgetionService: NavgetionService
    ) {

    }

    ngOnInit(): void {
        console.log(this.canvasRef);
        this.navgetion = this.navgetionService.navgetion;
        this.canvasImage = this.canvasRef.nativeElement.getContext('2d');
        const images = new Image();
        const urls = 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3173584241,3533290860&fm=26&gp=0.jpg';
        images.src = urls;
        images.setAttribute('crossOrigin','Anonymous');
        const sub = new Subject();
        fromEvent(images, 'load')
            .subscribe(() => {
                this.canvasImage.drawImage(images, 100, 100, 100, 100);
                sub.next(this.canvasImage);
            });
        sub.subscribe(res => console.log(this.canvasRef.nativeElement.toDataURL()));
    }
}
