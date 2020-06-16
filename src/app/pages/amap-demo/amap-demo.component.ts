import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-amap-demo',
    templateUrl: './amap-demo.component.html',
    styleUrls: ['./amap-demo.component.scss'],
})
export class AmapDemoComponent implements OnInit {
    markers = [
        [116.368904, 39.923423],
        [116.382122, 39.921176],
        [116.387271, 39.922501],
        [116.398258, 39.9146],
    ];

    myCity = '';

    infoWindowOffset = {
        x: 0,
        y: -30,
    };

    constructor() {
    }


    onEvent(event: any, type: string) {
        console.log('autocomplete event:', type, event);
    }


// {Q: 34.7980182080215, R: 113.43057923600077, lng: 113.430579, lat: 34.798018}
// {Q: 34.805347957762464, R: 113.67777161881327, lng: 113.677772, lat: 34.805348}
// {Q: 34.75007686255966, R: 113.68189149186014, lng: 113.681891, lat: 34.750077}
// {Q: 34.72299180000146, R: 113.61734681412577, lng: 113.617347, lat: 34.722992}
    ngOnInit() {
    }

    onMapEvent(event: any, type: string) {
        console.log(type, event);
    }

}
