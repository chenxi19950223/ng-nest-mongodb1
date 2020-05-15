import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeDemoComponent } from './tree-demo.component';
import { CanvasComponent } from '../canvas/canvas.component';


const routes: Routes = [
    {
        path: '',
        component: TreeDemoComponent,
        data: {
            reuse: true,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TreeDemoRoutingModule {
}
