import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreeDemoComponent } from './three-demo.component';


const routes: Routes = [
    {
        path: '',
        component: ThreeDemoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThreeDemoRoutingModule {
}
