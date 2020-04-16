import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/canvas'
    },
    {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module')
            .then(m => m.WelcomeModule)
    },
    {
        path: 'canvas',
        loadChildren: () => import('./pages/canvas/canvas.module')
            .then(m => m.CanvasModule)
    },
    {
        path: 'rx',
        loadChildren: () => import('./pages/rx/rx.module')
            .then(m => m.RxModule)
    },
    {
        path: 'key',
        loadChildren: () => import('./pages/key/key.module')
            .then(m => m.KeyModule)
    },
    {
        path: 'echarts',
        loadChildren: () => import('./pages/echarts/echarts.module')
            .then(m => m.EchartsModule)
    },
    {
        path: 'umeditor',
        loadChildren: () => import('./pages/umeditor-text/umeditor-text.module')
            .then(m => m.UmeditorTextModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
