import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyScoketRoutingModule } from './my-scoket-routing.module';
import { MyScoketComponent } from './my-scoket.component';


@NgModule({
  declarations: [MyScoketComponent],
  imports: [
    CommonModule,
    MyScoketRoutingModule
  ]
})
export class MyScoketModule { }
