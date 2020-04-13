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
    @ViewChild('aaa', {static: true}) canvasRef: ElementRef<HTMLCanvasElement>;
    @ViewChild('div', {static: true}) div: ElementRef<HTMLDivElement>;
    @ViewChildren('.img') img: ElementRef<HTMLImageElement>;
    canvasImage: CanvasRenderingContext2D;

    src: any;

    constructor(
        private navgetionService: NavgetionService,
        private sanitizer: DomSanitizer,
    ) {
        this.src = 'http://img1.imgtn.bdimg.com/it/u=3894475412,4064630517&fm=15&gp=0.jpg';

    }

    ngOnInit(): void {
        // this.navgetion = this.navgetionService.navgetion;
        // this.canvasImage = this.canvasRef.nativeElement.getContext('2d');
        // const images = new Image();
        // images.src = 'http://img1.imgtn.bdimg.com/it/u=1613243132,1204834355&fm=26&gp=0.jpg';
        // images.setAttribute('crossOrigin','Anonymous');
        // const sub = new Subject();
        // fromEvent(images, 'load')
        //     .subscribe(() => {
        //         this.canvasImage.drawImage(images, 100, 100, 100, 100);
        //         sub.next(this.canvasImage);
        //     });
        // sub.subscribe(res => console.log(this.canvasRef.nativeElement.toDataURL()));

        // this.navgetion = this.navgetionService.navgetion;
        // this.canvasImage = this.canvasRef.nativeElement.getContext('2d');
        // const imgBox = this.img.nativeElement;
        // imgBox.setAttribute('crossOrigin','Anonymous');
        // fromEvent(imgBox, 'load')
        //     .subscribe(() => {
        //         this.canvasImage.drawImage(imgBox, 0, 0);
        //         // console.log(this.canvasRef.nativeElement.toDataURL());
        //     });
    }
    ngAfterViewInit(): void {
        // this.navgetion = this.navgetionService.navgetion;
        // this.canvasImage = this.canvasRef.nativeElement.getContext('2d');
        // console.log(this.div.nativeElement.children);
        // const imgs = this.div.nativeElement.children;
        // for (const imgsKey in imgs) {
        //     if (imgsKey) {
        //         console.log(imgs[imgsKey]);
        //     }
        // }
        // const sub = new Subject();
        // const src = [];
        // for (const img of imgs as any as any[]) {
        //     src.push(img.getAttribute('src'));
        // }
        // const images = new Image();
        // images.src = src[0];
        // images.setAttribute('crossOrigin','Anonymous');
        // fromEvent(images, 'load')
        //     .subscribe(() => {
        //         this.canvasImage.drawImage(images, 0, 0, 100, 100);
        //         console.log(this.canvasRef.nativeElement.toDataURL());
        //
        //         // sub.next(this.canvasImage);
        //     });
        // sub.subscribe(() => console.log(this.canvasRef.nativeElement.toDataURL('image/jpeg')));
        // fromEvent(src[0], 'load')
        //     .subscribe(() => {
                // console.log(this.canvasRef.nativeElement.toDataURL());
            // });
    }
}
