import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { RxComponent } from './rx.component';
import { RxPipe } from './rx.pipe';

@NgModule({
    declarations: [RxComponent, RxPipe],
    imports: [
        CommonModule,
        RxRoutingModule,
    ],
})
export class RxModule {
}
