import { NgModule } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { WelcomeDirective } from './welcome.directive';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent, WelcomeDirective],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

/*
* 730
* 433
* 136
* 127
* 820
* 802
* 532
* 505
* */
