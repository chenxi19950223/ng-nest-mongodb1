import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirComponent } from './dir.component';


const routes: Routes = [
    {
        path: '',
        component: DirComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DirRoutingModule {
}
