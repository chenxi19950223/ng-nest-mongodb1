import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'dir',
                pathMatch: 'full',
            },
            {
                path: 'dir',
                loadChildren: () => import('../pages/dir/dir.module')
                    .then(m => m.DirModule)
            },
            {
                path: 'welcome',
                loadChildren: () => import('../pages/welcome/welcome.module')
                    .then(m => m.WelcomeModule),
            },
            {
                path: 'canvas',
                loadChildren: () => import('../pages/canvas/canvas.module')
                    .then(m => m.CanvasModule),
            },
            {
                path: 'rx',
                loadChildren: () => import('../pages/rx/rx.module')
                    .then(m => m.RxModule),
            },
            {
                path: 'key',
                loadChildren: () => import('../pages/key/key.module')
                    .then(m => m.KeyModule),
            },
            {
                path: 'echarts',
                loadChildren: () => import('../pages/echarts/echarts.module')
                    .then(m => m.EchartsModule),
            },
            {
                path: 'umeditor',
                loadChildren: () => import('../pages/umeditor-text/umeditor-text.module')
                    .then(m => m.UmeditorTextModule),
            },
            {
                path: 'images',
                loadChildren: () => import('../pages/images/images.module')
                    .then(m => m.ImagesModule),
            },
            {
                path: 'tree',
                loadChildren: () => import('../pages/tree-demo/tree-demo.module')
                    .then(m => m.TreeDemoModule),
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
