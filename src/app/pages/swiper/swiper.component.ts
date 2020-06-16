import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {

    public swiperConfig: SwiperOptions = {
        slidesPerView: 4,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 0,
        direction: 'vertical'
    };

    partners = [
        {imgPath: '../../../assets/images/1.png'},
        {imgPath: '../../../assets/images/2.png'},
        {imgPath: '../../../assets/images/3.png'},
        {imgPath: '../../../assets/images/4.png'},
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onNextClick(): void {
        console.log(111);
    }

    onPrevClick(): void {
        console.log(222);
    }

}
