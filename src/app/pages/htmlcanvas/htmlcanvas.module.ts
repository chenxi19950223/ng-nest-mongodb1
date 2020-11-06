import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlcanvasRoutingModule } from './htmlcanvas-routing.module';
import { HtmlcanvasComponent } from './htmlcanvas.component';


@NgModule({
  declarations: [HtmlcanvasComponent],
  imports: [
    CommonModule,
    HtmlcanvasRoutingModule
  ]
})
export class HtmlcanvasModule { }
