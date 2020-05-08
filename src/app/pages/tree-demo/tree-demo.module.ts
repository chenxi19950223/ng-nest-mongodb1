import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeDemoRoutingModule } from './tree-demo-routing.module';
import { TreeDemoComponent } from './tree-demo.component';


@NgModule({
  declarations: [TreeDemoComponent],
  imports: [
    CommonModule,
    TreeDemoRoutingModule
  ]
})
export class TreeDemoModule { }
