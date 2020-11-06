import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'hb',
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
                data: {
                    isPage: true,
                    preload: true
                }
            },
            {
                path: 'canvas',
                loadChildren: () => import('../pages/canvas/canvas.module')
                    .then(m => m.CanvasModule),
                data: {
                    isPage: true,
                    preload: true
                }
            },
            {
                path: 'rx',
                loadChildren: () => import('../pages/rx/rx.module')
                    .then(m => m.RxModule),
                data: {
                    isPage: true,
                    preload: true
                }
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
            /*
            * 图片组合功能
            * */
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
            },
            {
                path: 'service',
                loadChildren: () => import('../pages/service-demo/service-demo.module')
                    .then(m => m.ServiceDemoModule)
            },
            {
                path: 'scoket',
                loadChildren: () => import('../pages/my-scoket/my-scoket.module')
                    .then(m => m.MyScoketModule)
            },
            {
                path: 'lead',
                loadChildren: () => import('../pages/lead/lead.module')
                    .then(m => m.LeadModule),
                data: {
                    isPage: true,
                    preload: true
                }
            },
            /*
            * h5页面生成海报功能
            * */
            {
                path: 'hb',
                loadChildren: () => import('../pages/htmlcanvas/htmlcanvas.module')
                    .then(m => m.HtmlcanvasModule)
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
