import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeDemoRoutingModule } from './three-demo-routing.module';
import { ThreeDemoComponent } from './three-demo.component';


@NgModule({
    declarations: [ThreeDemoComponent],
    imports: [
        CommonModule,
        ThreeDemoRoutingModule,
    ],
})
export class ThreeDemoModule {
}
