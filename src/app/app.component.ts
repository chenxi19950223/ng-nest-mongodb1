import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {Navgetion, NavgetionService} from './navgetion.service';

import * as _ from 'lodash';
import {fromEvent} from 'rxjs';

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
        const image = new Image();
        const images = new Image();
        const url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586264135199&di=1fc84b8bc5fa49c7296a9f5811279994&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg';
        const urls = 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3173584241,3533290860&fm=26&gp=0.jpg';
        image.src = url;
        images.src = urls;
        fromEvent(image, 'load')
            .subscribe(() => {
                this.canvasImage.drawImage(image, 0 , 0, 100, 100);
                this.canvasImage.drawImage(images, 100, 100, 100, 100);
            });
    }
}
