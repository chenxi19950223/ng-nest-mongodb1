import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import {AsyncSubject, fromEvent, Subject} from 'rxjs';
import { filter, tap } from 'rxjs/operators';

export interface GridType {
    cols: number;
    rows: number;
    y: number;
    x: number;
}

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
    imgSrc: any[] = [];
    base: any[] = [];

    gridType: Array<GridType[]>;

    @ViewChild('can', {static: true}) canRef: ElementRef<HTMLCanvasElement>;
    canImage: CanvasRenderingContext2D;

    constructor() {

        this.gridType = [
            [
                {cols: 2, rows: 1, x: 0, y: 0},
                {cols: 2, rows: 1, x: 1, y: 0},
            ],
            [
                {cols: 1, rows: 1, x: 0, y: 0},
                {cols: 1, rows: 1, x: 1, y: 0},
                {cols: 1, rows: 1, x: 0, y: 1},
                {cols: 1, rows: 1, x: 1, y: 1},
            ],
            [
                {cols: 2, rows: 2, y: 0, x: 0},
                {cols: 1, rows: 1, y: 0, x: 2},
                {cols: 1, rows: 1, y: 1, x: 2},
                {cols: 1, rows: 1, y: 2, x: 0},
                {cols: 1, rows: 1, y: 2, x: 1},
                {cols: 1, rows: 1, y: 2, x: 2}
            ],
            [
                {cols: 1, rows: 1, y: 0, x: 0},
                {cols: 1, rows: 1, y: 0, x: 1},
                {cols: 1, rows: 1, y: 0, x: 2},
                {cols: 1, rows: 1, y: 1, x: 0},
                {cols: 1, rows: 1, y: 1, x: 1},
                {cols: 1, rows: 1, y: 1, x: 2},
                {cols: 1, rows: 1, y: 2, x: 0},
                {cols: 1, rows: 1, y: 2, x: 1},
                {cols: 1, rows: 1, y: 2, x: 2},
            ],
            [
                {cols: 1, rows: 1, y: 0, x: 0},
                {cols: 1, rows: 1, y: 0, x: 1},
                {cols: 1, rows: 1, y: 0, x: 2},
                {cols: 1, rows: 1, y: 0, x: 3},
                {cols: 1, rows: 1, y: 1, x: 0},
                {cols: 1, rows: 1, y: 1, x: 1},
                {cols: 1, rows: 1, y: 1, x: 2},
                {cols: 1, rows: 1, y: 1, x: 3},
                {cols: 1, rows: 1, y: 2, x: 0},
                {cols: 1, rows: 1, y: 2, x: 1},
                {cols: 1, rows: 1, y: 2, x: 2},
                {cols: 1, rows: 1, y: 2, x: 3},
                {cols: 1, rows: 1, y: 3, x: 0},
                {cols: 1, rows: 1, y: 3, x: 1},
                {cols: 1, rows: 1, y: 3, x: 2},
                {cols: 1, rows: 1, y: 3, x: 3},
            ]
        ];

        this.imgSrc = [
            '../../../assets/images/1.png',
            '../../../assets/images/2.png',
            '../../../assets/images/3.png',
            '../../../assets/images/4.png',
            '../../../assets/images/5.png',
            '../../../assets/images/6.png',
            '../../../assets/images/7.png',
            '../../../assets/images/8.png',
            '../../../assets/images/9.png',
           ];
    }

    ngOnInit() {
        // 获取canvas上下文对象
        this.canImage = this.canRef.nativeElement.getContext('2d');
    }

    // 图片合成方式
    onSave(type): void {
        /*
        * 制定画布宽高
        * 注意的是画布的宽高会影响合成的图片质量
        * 这里推荐使用原图的宽高等比放大缩小
        * 尽量使用原图宽高
        * 因为省事所以制定了画布的宽高与大小所以生成的图像画质为1920*1080
        * */
        this.canRef.nativeElement.width = 1920;
        this.canRef.nativeElement.height = 1080;
        let idx = 0;
        type.forEach(item => {
            if (idx < item.x) {
                idx = item.x;
            }
        });
        let idy = 0;
        type.forEach(item => {
            if (idy < item.y) {
                idy = item.y;
            }
        });
        let num: number;
        // 计算布局最大格数
        idx > idy ? num = idx : num = idy;
        const sub = new Subject();
        const iArr = [];
        for (let i = 0; i < type.length; i++) {
            if (this.imgSrc[i]) {
                iArr.push(i);
                const img = new Image();
                img.src = this.imgSrc[i];
                fromEvent(img, 'load')
                    .subscribe(() => {
                        const x = (1920 / (num + 1)) * type[i].x;
                        const y = (1080 / (num + 1)) * type[i].y;
                        const w = (1920 / (num + 1)) * type[i].rows;
                        const h = (1080 / (num + 1)) * type[i].cols;
                        this.canImage.drawImage(img, x, y, w, h);
                        sub.next({index: i, toData: this.canRef.nativeElement.toDataURL()});
                    });
            }
        }

        const lastIndex = Math.max(...iArr);
        console.log(lastIndex);
        sub
            .pipe(
                filter(({index}) => index === lastIndex)
            )
            .subscribe((res: any) => {
                this.base.push(res.toData);
            });


        // switch (type) {
        //     case 2: {
        //         this.grid2();
        //         break;
        //     }
        //     case 4: {
        //         this.grid4();
        //         break;
        //     }
        //     case 6: {
        //         this.grid6();
        //         break;
        //     }
        //     case 9: {
        //         this.grid9();
        //         break;
        //     }
        //     default: {
        //         break;
        //     }
        // }
    }

    onBtn(): void {
        console.log(this.base);
    }

    grid2(): void {
        // 获取图片对象
        const img1 = new Image();
        const img2 = new Image();
        img1.setAttribute('crossOrigin', 'Anonymous');
        img2.setAttribute('crossOrigin', 'Anonymous');
        img1.src = this.imgSrc[0];
        img2.src = this.imgSrc[1];
        fromEvent(img1 && img2, 'load')
            .subscribe(() => {
                this.canImage.drawImage(img1, 0, 0, 960, 1080);
                this.canImage.drawImage(img2, 960, 0, 960, 1080);
                const data = this.canRef.nativeElement.toDataURL();
                console.log(data);
                this.base.push(data);
            });
    }

    grid4(): void {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        img1.setAttribute('crossOrigin', 'Anonymous');
        img2.setAttribute('crossOrigin', 'Anonymous');
        img3.setAttribute('crossOrigin', 'Anonymous');
        img4.setAttribute('crossOrigin', 'Anonymous');
        img1.src = this.imgSrc[0];
        img2.src = this.imgSrc[1];
        img3.src = this.imgSrc[2];
        img4.src = this.imgSrc[3];
        fromEvent(img1 && img2 && img3 && img4, 'load')
            .subscribe(() => {
                this.canImage.drawImage(img1, 0, 0, 960, 540);
                this.canImage.drawImage(img2, 960, 0, 960, 540);
                this.canImage.drawImage(img3, 0, 540, 960, 540);
                this.canImage.drawImage(img4, 960, 540, 960, 540);
                const data = this.canRef.nativeElement.toDataURL();
                console.log(data);
                this.base.push(data);
            });
    }

    grid6(): void {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        img1.setAttribute('crossOrigin', 'Anonymous');
        img2.setAttribute('crossOrigin', 'Anonymous');
        img3.setAttribute('crossOrigin', 'Anonymous');
        img4.setAttribute('crossOrigin', 'Anonymous');
        img5.setAttribute('crossOrigin', 'Anonymous');
        img6.setAttribute('crossOrigin', 'Anonymous');
        img1.src = this.imgSrc[0];
        img2.src = this.imgSrc[1];
        img3.src = this.imgSrc[2];
        img4.src = this.imgSrc[3];
        img5.src = this.imgSrc[4];
        img6.src = this.imgSrc[5];
        fromEvent(img1 && img2 && img3 && img4 && img5 && img6, 'load')
            .subscribe(() => {
                this.canImage.drawImage(img1, 0, 0, (1920 / 3), 540);
                this.canImage.drawImage(img2, (1920 / 3), 0, (1920 / 3), 540);
                this.canImage.drawImage(img3, (1920 / 3) * 2, 0, (1920 / 3), 540);
                this.canImage.drawImage(img4, 0, 540, (1920 / 3), 540);
                this.canImage.drawImage(img5, (1920 / 3), 540, (1920 / 3), 540);
                this.canImage.drawImage(img6, (1920 / 3) * 2, 540, (1920 / 3), 540);
                const data = this.canRef.nativeElement.toDataURL();
                console.log(data);
                this.base.push(data);
            });
    }

    grid9(): void {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const img9 = new Image();
        img1.setAttribute('crossOrigin', 'Anonymous');
        img2.setAttribute('crossOrigin', 'Anonymous');
        img3.setAttribute('crossOrigin', 'Anonymous');
        img4.setAttribute('crossOrigin', 'Anonymous');
        img5.setAttribute('crossOrigin', 'Anonymous');
        img6.setAttribute('crossOrigin', 'Anonymous');
        img7.setAttribute('crossOrigin', 'Anonymous');
        img8.setAttribute('crossOrigin', 'Anonymous');
        img9.setAttribute('crossOrigin', 'Anonymous');
        img1.src = this.imgSrc[0];
        img2.src = this.imgSrc[1];
        img3.src = this.imgSrc[2];
        img4.src = this.imgSrc[3];
        img5.src = this.imgSrc[4];
        img6.src = this.imgSrc[5];
        img7.src = this.imgSrc[6];
        img8.src = this.imgSrc[7];
        img9.src = this.imgSrc[8];
        fromEvent(img1 && img2 && img3 && img4 && img5 && img6 && img7 && img8 && img9, 'load')
            .subscribe(() => {
                this.canImage.drawImage(img1, 0, 0, (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img2, (1920 / 3), 0, (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img3, (1920 / 3) * 2, 0, (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img4, 0, (1080 / 3), (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img5, (1920 / 3), (1080 / 3), (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img6, (1920 / 3) * 2, (1080 / 3), (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img7, 0, (1080 / 3) * 2, (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img8, (1920 / 3), (1080 / 3) * 2, (1920 / 3), (1080 / 3));
                this.canImage.drawImage(img9, (1920 / 3) * 2, (1080 / 3) * 2, (1920 / 3), (1080 / 3));
                const data = this.canRef.nativeElement.toDataURL();
                console.log(data);
                this.base.push(data);
            });
    }

}
