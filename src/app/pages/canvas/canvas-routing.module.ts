import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasComponent } from './canvas.component';


const routes: Routes = [
    {
        path: '',
        component: CanvasComponent,
        data: {
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CanvasRoutingModule {
}
