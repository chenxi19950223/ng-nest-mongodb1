import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {fromEvent, Subject} from 'rxjs';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

    constructor(
        private el: ElementRef,
        private domSanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        // 获取所有box类的元素
        console.log(this.el.nativeElement.querySelectorAll('.box'));
        // 获取第一个box类的元素
        console.log(this.el.nativeElement.querySelector('.box'));
        // 创建一个canvas画布
        const can = document.createElement('canvas');
        can.height = 300;
        can.width = 300;
        // 获取canvas上下文
        const canImage = can.getContext('2d');
        // new一个image实例
        const img = new Image();
        // 将链接复制给img实例的src属性
        img.src = 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3871724783,1282488085&fm=111&gp=0.jpg';
        // 防止画布被污染导致无法导出
        img.setAttribute('crossOrigin','Anonymous');
        /*
        * 进行异步操作
        * 当图片信息完全返回时渲染图片
        * */
        const sub = new Subject();
        fromEvent(img, 'load')
            .subscribe(() => {
                canImage.drawImage(img, 0, 0, 100, 100);
                sub.next();
            });
        this.el.nativeElement.querySelector('.box').appendChild(can);
        sub.subscribe(() => {
            console.log(can.toDataURL('image/jpeg', 0.6));
            // const base = can.toDataURL('image/jpeg', 0.6);
            // const can2 = document.createElement('canvas');
            // can2.height = 200;
            // can2.width = 200;
            // const canImage2 = can2.getContext('2d');
            // const img2 = new Image();
            // img2.src = base;
            // fromEvent(img2, 'load')
            //     .subscribe(() => {
            //         canImage2.drawImage(img2, 0, 0, 200, 200);
            //     });
            // this.el.nativeElement.querySelector('.box').appendChild(can2);
        });
    }

}
