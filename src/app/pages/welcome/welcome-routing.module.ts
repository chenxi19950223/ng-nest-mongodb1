import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'aaa',
        loadChildren: () => import('./aaa/aaa.module')
            .then(m => m.AaaModule),
        data: {
            isPage: true,
            preload: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WelcomeRoutingModule {
}
