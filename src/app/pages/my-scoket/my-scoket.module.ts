import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyScoketRoutingModule } from './my-scoket-routing.module';
import { MyScoketComponent } from './my-scoket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyScoketComponent],
    imports: [
        CommonModule,
        MyScoketRoutingModule,
        FormsModule
    ]
})
export class MyScoketModule { }
