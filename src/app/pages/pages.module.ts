import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        IconsProviderModule,
        NgZorroAntdModule,
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
})
export class PagesModule {
}
