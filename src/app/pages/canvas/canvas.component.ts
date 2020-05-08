import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AsyncSubject, fromEvent, Observable, Subject } from 'rxjs';
import { NgForage } from 'ngforage';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('can', {static: true}) canRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('bor', {static: true}) borRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('straightLine', {static: true}) straightLineRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('start', {static: true}) startRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('el', {static: true}) elRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('vid', {static: true}) vidRef: ElementRef<HTMLVideoElement>;
  canImage: CanvasRenderingContext2D;
  borImage: CanvasRenderingContext2D;
  straightLineImage: CanvasRenderingContext2D;
  startImage: CanvasRenderingContext2D;
  elCan: CanvasRenderingContext2D;

  constructor(
    private el: ElementRef,
    private domSanitizer: DomSanitizer,
    private ngForage: NgForage
  ) {
  }

  ngOnInit() {
    this.can();
    this.bor();
    this.straightLine();
    this.startBor();
    this.elCanImg();
  }

  elCanImg(): void {
    this.elCan = this.elRef.nativeElement.getContext('2d');
    this.elRef.nativeElement.width = 200;
    this.elRef.nativeElement.height = 200;
    let a = 145;
    const time = setInterval(() => {
      a += 1;
      this.elCan.strokeStyle = '#448aff';
      this.elCan.beginPath();
      if (a >= 300) {
        clearInterval(time);
      }
      // console.log(Math.PI / 180);
      // console.log((Math.PI / 360) * a);
      this.elCan.lineCap = 'round';
      this.elCan.arc(100, 100, 95, (Math.PI / 360) * 225, (Math.PI / 360) * 3, false);
      this.elCan.lineWidth = 5;
      this.elCan.stroke();
      this.elCan.closePath();
    }, 10);
  }

  startBor(): void {
    this.startRef.nativeElement.width = 200;
    this.startRef.nativeElement.height = 200;
    this.startImage = this.startRef.nativeElement.getContext('2d');
    // 外层圆环
    this.startImage.beginPath();
    this.startImage.strokeStyle = '#ebebeb';  // 颜色
    this.startImage.arc(100, 100, 90, (Math.PI / 180) * 270, (Math.PI / 180) * -90, false);
    this.startImage.lineWidth = 20;
    this.startImage.closePath();
    this.startImage.stroke();
    // 设置着色圆环
    this.frameArc();
    this.drawText();
  }

  // 动态圆环
  frameArc() {
    const speed = 20; // 速度
    let stepDeg = 0;  // 初始值
    const timer = setInterval(() => {
      stepDeg += 1; // 以1为间距
      // 若当前数值已大于传入数值，则清除定时器
      if (stepDeg >= 35) {
        clearInterval(timer);
      }
      // 内层圆环
      const context = this.startImage;
      context.beginPath();
      // 设置渐变色
      const gradient = context.createLinearGradient(0, 20, 0, 120);
      gradient.addColorStop(0, '#ffaa03');
      gradient.addColorStop(1, '#ff4514');
      context.strokeStyle = gradient;
      context.lineCap = 'round';  // 使其形状为圆弧
      context.arc(100, 100, 90, (Math.PI / 180) * 150, (Math.PI / 180) * (270 + (stepDeg / 100 * 360)), false);
      context.lineWidth = 20; // 圆环的宽度
      context.stroke();
      context.closePath();
    }, speed);
  }

  // 文字
  drawText() {
    const cans = this.startRef.nativeElement.getContext('2d');
    cans.font = 'bold 12px Arial';  // 字体
    cans.fillStyle = '#676767'; // 字体颜色
    // cans.textAlign = 'center';  // 使文字居中
    cans.fillText(10 + '%', 100 / 2, 100 / 2 + 15);
  }

  straightLine(): void {
    this.straightLineImage = this.straightLineRef.nativeElement.getContext('2d');
    this.straightLineRef.nativeElement.width = 400;
    this.straightLineRef.nativeElement.height = 400;
    this.straightLineRef.nativeElement.style.backgroundColor = '#ddd';
  }

  bor(): void {
    this.borImage = this.borRef.nativeElement.getContext('2d');
    this.borRef.nativeElement.width = 500;
    this.borRef.nativeElement.height = 500;
    this.borImage.fillStyle = '#ddd';
    this.borImage.fillRect(0, 0, 500, 500);
    for (let i = 0; i < 15; i++) {
      this.borImage.beginPath();
      this.borImage.arc(i * 25, i * 25, i * 10, Math.PI * 2, 0);
      // this.borImage.closePath();
      this.borImage.fillStyle = 'rgba(255, 0, 0, .25)';
      this.borImage.fill();
    }
  }

  can(): void {
    this.canImage = this.canRef.nativeElement.getContext('2d');
    this.canRef.nativeElement.width = 400;
    this.canRef.nativeElement.height = 300;
    this.canImage.fillStyle = '#eeeeff';
    this.canImage.fillRect(0, 0, 400, 300);
    this.canImage.fillStyle = 'red';
    this.canImage.lineWidth = 1;
    this.canImage.fillRect(50, 50, 100, 100);
    this.canImage.strokeRect(50, 50, 100, 100);
    this.canImage.strokeStyle = 'blue';
  }

  ngAfterViewInit(): void {
    // // 获取所有box类的元素
    // console.log(this.el.nativeElement.querySelectorAll('.box'));
    // // 获取第一个box类的元素
    // console.log(this.el.nativeElement.querySelector('.box'));
    // // 创建一个canvas画布
    // const can = document.createElement('canvas');
    // can.height = 300;
    // can.width = 300;
    // // 获取canvas上下文
    // const canImage = can.getContext('2d');
    // // new一个image实例
    // const img = new Image();
    // // 将链接复制给img实例的src属性
    // img.src = 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3871724783,1282488085&fm=111&gp=0.jpg';
    // // 防止画布被污染导致无法导出
    // img.setAttribute('crossOrigin','Anonymous');
    // /*
    // * 进行异步操作
    // * 当图片信息完全返回时渲染图片
    // * */
    // const sub = new Subject();
    // fromEvent(img, 'load')
    //     .subscribe(() => {
    //         canImage.drawImage(img, 0, 0, 100, 100);
    //         sub.next();
    //     });
    // this.el.nativeElement.querySelector('.box').appendChild(can);
    // sub.subscribe(() => {
    //     console.log(can.toDataURL('image/jpeg', 0.6));
    //     // const base = can.toDataURL('image/jpeg', 0.6);
    //     // const can2 = document.createElement('canvas');
    //     // can2.height = 200;
    //     // can2.width = 200;
    //     // const canImage2 = can2.getContext('2d');
    //     // const img2 = new Image();
    //     // img2.src = base;
    //     // fromEvent(img2, 'load')
    //     //     .subscribe(() => {
    //     //         canImage2.drawImage(img2, 0, 0, 200, 200);
    //     //     });
    //     // this.el.nativeElement.querySelector('.box').appendChild(can2);
    // });
  }

}
