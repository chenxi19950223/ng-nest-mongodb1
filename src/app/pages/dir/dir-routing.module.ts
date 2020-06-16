import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirComponent } from './dir.component';
import { DirDemoComponent } from './dir-demo/dir-demo.component';


const routes: Routes = [
    {
        path: '',
        component: DirComponent,
    },
    {
        path: 'demo/:name',
        component: DirDemoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DirRoutingModule {
}
