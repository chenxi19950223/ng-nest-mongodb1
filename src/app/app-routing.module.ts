import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

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
            .then(m => m.LoginModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            preloadingStrategy: SelectivePreloadingStrategyService
        }
    )],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
