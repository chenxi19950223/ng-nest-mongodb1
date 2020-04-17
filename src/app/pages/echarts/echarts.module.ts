import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxEchartsModule} from 'ngx-echarts';

import {EchartsRoutingModule} from './echarts-routing.module';
import {EchartsComponent} from './echarts.component';


@NgModule({
    declarations: [EchartsComponent],
    imports: [
        CommonModule,
        EchartsRoutingModule,
        NgxEchartsModule
    ]
})
export class EchartsModule {
}
