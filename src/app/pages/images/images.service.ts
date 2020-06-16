import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ImagesService {
    private renderer: Renderer2;

    constructor(
        rendererFactory: RendererFactory2,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    canvas(type, imgSrc): Observable<any> {
        const canvas = this.renderer.createElement('canvas');
        canvas.width = 1920;
        canvas.height = 1080;
        const canImage = canvas.getContext('2d');
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
            if (imgSrc[i]) {
                iArr.push(i);
                const img = new Image();
                img.src = imgSrc[i];
                fromEvent(img, 'load')
                    .subscribe(() => {
                        const x = (1920 / (num + 1)) * type[i].x;
                        const y = (1080 / (num + 1)) * type[i].y;
                        const w = (1920 / (num + 1)) * type[i].rows;
                        const h = (1080 / (num + 1)) * type[i].cols;
                        canImage.drawImage(img, x, y, w, h);
                        let toData;
                        canvas.toBlob((blob) => {
                            toData = blob
                        })
                        sub.next({index: i, toData: canvas.toData, blob: toData});
                    });
            }
        }
        const lastIndex = Math.max(...iArr);

        const subA = new Subject();
        sub
            .pipe(
                filter(({index}) => index === lastIndex),
            )
            .subscribe(
                res => subA.next(res),
            );
        return new Observable((observer) => {
            subA.subscribe(res => observer.next(res));
        });
    }

}
