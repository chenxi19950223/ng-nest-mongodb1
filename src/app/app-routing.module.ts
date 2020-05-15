import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pages',
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module')
            .then(m => m.LoginModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
