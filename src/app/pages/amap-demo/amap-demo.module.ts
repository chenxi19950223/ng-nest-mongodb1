import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAmapModule } from 'ngx-amap';

import { AmapDemoRoutingModule } from './amap-demo-routing.module';
import { AmapDemoComponent } from './amap-demo.component';


@NgModule({
    declarations: [AmapDemoComponent],
    imports: [
        CommonModule,
        AmapDemoRoutingModule,
        NgxAmapModule.forRoot({apiKey: '2ee00f01a0eb3f77668c62c3e842f34f'}),
    ],
})
export class AmapDemoModule {
}
