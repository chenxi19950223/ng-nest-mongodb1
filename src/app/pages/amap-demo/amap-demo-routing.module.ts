import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmapDemoComponent } from './amap-demo.component';


const routes: Routes = [
    {
        path: '',
        component: AmapDemoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AmapDemoRoutingModule {
}
