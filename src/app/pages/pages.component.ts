import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';
import html2canvas from 'html2canvas';

import { Navgetion, NavgetionService } from '../navgetion.service';
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

    @ViewChild('downloadLink', { static: true }) downloadLink: ElementRef;


    constructor(
        private navgetionService: NavgetionService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private leadDemoService: LeadDemoService,
        private renderer: Renderer2,
    ) {
        this.navgetion = this.navgetionService.navgetion;
    }

    ngOnInit(): void {
    }
    onNav(nav): void {
        console.log(nav);
    }

    open(): void {
        console.log(1);
        this.captureDom(document.body).then(canvas => {
            let href;
            try {
                href = canvas.toDataURL('image/png');
            } catch (e) {
                console.log(2);
                return;
            }
            console.log(href);
            this.renderer.setAttribute(this.downloadLink.nativeElement, 'href', href);
        });
    }

    private captureDom(dom) {
        /* dom 宽度、高度、距离顶部的偏移量 */
        const { width, height, offsetTop } = dom;
        const canvas = document.createElement('canvas'); // 创建canvas 对象
        canvas.id = 'capture-canvas';
        const context = canvas.getContext('2d');
        const scaleBy = this.getPixelRatio(context); // 获取像素密度的方法 (也可以采用自定义缩放比例)
        canvas.width = width * scaleBy; // 这里 由于绘制的dom 为固定宽度，居中，所以没有偏移
        canvas.height = (height + offsetTop) * scaleBy; // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
        context.scale(scaleBy, scaleBy);
        const options = {
            allowTaint: true, // 允许加载跨域的图片
            useCORS: true,
            tainttest: true, // 检测每张图片都已经加载完成
            scale: scaleBy, // 添加的scale 参数
            canvas, // 自定义 canvas
            logging: false, // 日志开关，发布的时候记得改成false
            width, // dom 原始宽度
            height // dom 原始高度
        };

        return html2canvas(dom, options);
    }

    private getPixelRatio(context) {
        const backingStore =
            context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;
        return (window.devicePixelRatio || 1) / backingStore;
    }

}
