import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { AsyncSubject, fromEvent, Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { ImagesService } from './images.service';

export interface GridType {
    cols: number;
    rows: number;
    y: number;
    x: number;
}


@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
    imgSrc: any[] = [];
    base: any[] = [];

    gridType: Array<GridType[]>;

    @ViewChild('can', {static: true}) canRef: ElementRef<HTMLCanvasElement>;
    canImage: CanvasRenderingContext2D;

    constructor(
        private imagesService: ImagesService,
        private http: HttpClient,
    ) {

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
                {cols: 1, rows: 1, y: 2, x: 2},
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
            ],
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
    // onSave(type): void {
    //     /*
    //     * 制定画布宽高
    //     * 注意的是画布的宽高会影响合成的图片质量
    //     * 这里推荐使用原图的宽高等比放大缩小
    //     * 尽量使用原图宽高
    //     * 因为省事所以制定了画布的宽高与大小所以生成的图像画质为1920*1080
    //     * */
    //     this.canRef.nativeElement.width = 1920;
    //     this.canRef.nativeElement.height = 1080;
    //     let idx = 0;
    //     type.forEach(item => {
    //         if (idx < item.x) {
    //             idx = item.x;
    //         }
    //     });
    //     let idy = 0;
    //     type.forEach(item => {
    //         if (idy < item.y) {
    //             idy = item.y;
    //         }
    //     });
    //     let num: number;
    //     // 计算布局最大格数
    //     idx > idy ? num = idx : num = idy;
    //     const sub = new Subject();
    //     const iArr = [];
    //     for (let i = 0; i < type.length; i++) {
    //         if (this.imgSrc[i]) {
    //             iArr.push(i);
    //             const img = new Image();
    //             img.src = this.imgSrc[i];
    //             fromEvent(img, 'load')
    //                 .subscribe(() => {
    //                     const x = (1920 / (num + 1)) * type[i].x;
    //                     const y = (1080 / (num + 1)) * type[i].y;
    //                     const w = (1920 / (num + 1)) * type[i].rows;
    //                     const h = (1080 / (num + 1)) * type[i].cols;
    //                     this.canImage.drawImage(img, x, y, w, h);
    //                     console.log(this.canRef.nativeElement.toDataURL());
    //                     sub.next({index: i, toData: this.canRef.nativeElement.toDataURL()});
    //                 });
    //         }
    //     }
    //
    //     const lastIndex = Math.max(...iArr);
    //     sub
    //         .pipe(
    //             filter(({index}) => index === lastIndex),
    //         )
    //         .subscribe((res: any) => {
    //             this.base.push(res.toData);
    //         });
    // }

    onSave(type): void {
        this.imagesService.canvas(type, this.imgSrc)
            .subscribe(res => {
                this.base.push(res.toData);
                let request;
                const formData = new FormData();
                formData.append('pem', res.blob);
                console.log(formData)

                const req = new HttpRequest('POST', 'http://10.0.0.41:3005/deviceHttpsCertificateUpload', formData,
                    {
                        reportProgress: true
                    }
                );
                request = this.http.request(req);
                request.subscribe(res => console.log(res));
                // this.http.post('http://127.0.0.1:3000/user/file', formData)
                //     .subscribe(console.log)
            });
    }

}
