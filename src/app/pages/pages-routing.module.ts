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
                redirectTo: 'swiper',
                pathMatch: 'full',
            },
            {
                path: 'dir',
                loadChildren: () => import('../pages/dir/dir.module')
                    .then(m => m.DirModule),
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
            {
                path: 'table',
                loadChildren: () => import('../pages/table/table.module')
                    .then(m => m.TableModule),
            },
            {
                path: 'amap',
                loadChildren: () => import('../pages/amap-demo/amap-demo.module')
                    .then(m => m.AmapDemoModule),
            },
            {
                path: 'three',
                loadChildren: () => import('../pages/three-demo/three-demo.module')
                    .then(m => m.ThreeDemoModule),
            },
            {
                path: 'swiper',
                loadChildren: () => import('../pages/swiper/swiper.module')
                    .then(m => m.SwiperModule)
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
