import {Injectable} from '@angular/core';

export interface Navgetion {
    id: string;
    title: string;
    icon?: string;
    routerLink?: string;
    type?: string;
    children?: Navgetion[];
}

@Injectable({
    providedIn: 'root'
})
export class NavgetionService {
    navgetion: Navgetion[];
    constructor() {
        this.navgetion = [
            {
                id: 'home',
                title: '首页',
                type: 'item',
                children: [{
                    id: 'home',
                    title: '首页',
                    type: 'item',
                    routerLink: 'welcome'
                }]
            },
            {
                id: 'list',
                title: '列表',
                children: [
                    {
                        id: '',
                        title: '数据表',
                        routerLink: ''
                    },
                    {
                        id: 'userList',
                        title: '用户列表',
                    }
                ]
            },
            {
                id: 'form',
                title: '表单'
            }
        ];
    }
}
