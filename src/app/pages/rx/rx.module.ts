import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxRoutingModule } from './rx-routing.module';
import { RxComponent } from './rx.component';


@NgModule({
  declarations: [RxComponent],
  imports: [
    CommonModule,
    RxRoutingModule
  ]
})
export class RxModule { }
