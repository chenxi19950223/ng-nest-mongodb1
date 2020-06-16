import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { SwiperRoutingModule } from './swiper-routing.module';
import { SwiperComponent } from './swiper.component';


@NgModule({
    declarations: [SwiperComponent],
    imports: [
        CommonModule,
        SwiperRoutingModule,
        NgxUsefulSwiperModule
    ],
})
export class SwiperModule {
}
