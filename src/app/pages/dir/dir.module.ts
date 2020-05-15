import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirRoutingModule } from './dir-routing.module';
import { DirComponent } from './dir.component';
import { DirDirective } from './dir.directive';
import { DirDemoComponent } from './dir-demo/dir-demo.component';


@NgModule({
    declarations: [DirComponent, DirDirective, DirDemoComponent],
    imports: [
        CommonModule,
        DirRoutingModule,
    ],
})
export class DirModule {
}
