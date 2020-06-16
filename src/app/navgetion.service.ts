import { Injectable } from '@angular/core';

export interface Navgetion {
    id: string;
    title: string;
    icon?: string;
    routerLink?: string;
    type?: string;
    children?: Navgetion[];
}

@Injectable({
    providedIn: 'root',
})
export class NavgetionService {
    navgetion: Navgetion[];

    constructor() {
        this.navgetion = [
            {
                id: 'pages',
                title: '首页',
                type: 'item',
                children: [
                    {
                        id: 'welcome',
                        title: 'welcome',
                        type: 'item',
                        routerLink: 'welcome',
                    },
                    {
                        id: 'welcome',
                        title: 'tree',
                        type: 'item',
                        routerLink: 'tree',
                    },
                    {
                        id: 'canvas',
                        title: 'canvas',
                        type: 'item',
                        routerLink: 'canvas',
                    },
                    {
                        id: 'images',
                        title: 'images',
                        type: 'item',
                        routerLink: 'images',
                    },
                    {
                        id: 'dir',
                        title: 'dir',
                        type: 'item',
                        routerLink: 'dir',
                    },
                    {
                        id: 'echarts',
                        title: 'echarts',
                        type: 'item',
                        routerLink: 'echarts',
                    },
                    {
                        id: 'table',
                        title: 'table',
                        type: 'item',
                        routerLink: 'table',
                    },
                    {
                        id: 'amap',
                        title: 'amap',
                        type: 'item',
                        routerLink: 'amap',
                    },
                    {
                        id: 'three',
                        title: 'three',
                        type: 'item',
                        routerLink: 'three',
                    },
                    {
                        id: 'swiper',
                        title: 'swiper',
                        type: 'item',
                        routerLink: 'swiper'
                    }
                ],
            },
        ];
    }
}
