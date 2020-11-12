import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [IconComponent],
    imports: [
        CommonModule,
        IconRoutingModule,
        AngularSvgIconModule
    ]
})
export class IconModule { }
