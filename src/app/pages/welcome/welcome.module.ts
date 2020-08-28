import { NgModule } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { WelcomeDirective } from './welcome.directive';
import { ContentComponent } from './content/content.component';


@NgModule({
    imports: [WelcomeRoutingModule],
    declarations: [WelcomeComponent, WelcomeDirective, ContentComponent],
    exports: [WelcomeComponent],
})
export class WelcomeModule {
}

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
