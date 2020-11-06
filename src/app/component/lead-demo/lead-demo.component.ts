import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { filter, first, last } from 'rxjs/operators';

import { LeadListType } from '../../pages/lead/lead-list-type';
import { Subject } from 'rxjs';
import { LeadDemoService } from './lead-demo.service';

const LEADLIST: LeadListType[] = [
    {id: 'welcome', title: '欢迎页第一项', details: '第一项', router: '/pages/welcome'},
    {id: 'welcome-btn', title: '欢迎页第一项', details: '第一项', router: '/pages/welcome'},
    {id: '', title: 'lead页第一项', details: '第一项', router: '/pages/lead'},
    {id: '', title: 'lead页第二项', details: '第一项', router: '/pages/lead'},
    {id: '', title: 'lead页第三项', details: '第一项', router: '/pages/lead'},
    {id: 'first', title: 'lead页第二项', details: '第一项', router: '/pages/lead'},
    {id: '', title: 'lead页第二项', details: '第一项', router: '/pages/lead'},
    {id: '', title: 'lead页第二项', details: '第一项', router: '/pages/lead'},
    {id: '', title: 'lead页第二项', details: '第一项', router: '/pages/lead'},
    {id: '', title: 'lead页第三项', details: '第一项', router: '/pages/lead'},
];

interface LocationAndSizeType {
    w: number; // 元素宽
    h: number; // 元素高
    l: number; // 元素居左距离
    r: number; // 元素居右距离
    t: number; // 元素居上距离
    b: number; // 元素居下距离
}

@Component({
    selector: 'app-lead-demo',
    templateUrl: './lead-demo.component.html',
    styleUrls: ['./lead-demo.component.scss']
})
export class LeadDemoComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('box', {static: true}) box: ElementRef<HTMLDivElement>;
    leadList: LeadListType[]; // 引导数据列表
    index: number; // 引导索引
    locationAndSize: LocationAndSizeType; // 遮罩元素样式
    show: boolean; // 是否显示遮罩元素
    isLead: boolean; // 是否开启引导
    /*
    * 创建一个可观察对象
    * 每次发送流的时候重新开始引导
    * */
    leadSubject: Subject<any>;

    leadStepType: string; // 引导步骤类型(上一步或者下一步)
    constructor(
        private router: Router,
        private http: HttpClient,
        private leadDemoService: LeadDemoService
    ) {
        this.show = false; // 当前引导元素是否显示
        this.index = 0; // 当前引导项索引
        this.leadStepType = 'next';
        this.leadList = LEADLIST;
        this.leadSubject = new Subject<any>();
        this.router.events
            .pipe(
                filter(event => event instanceof ChildActivationEnd ),
                first()
            )
            .subscribe(event => {
                console.log(event);
            });

        // 监测路由
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
            )
            .subscribe(event => {
                console.log(event);
                const sub = this.leadSubject.subscribe(res => {
                    this.isLead = res;
                    this.index = 0;
                    if (res) {
                        setTimeout(() => {
                            this.domFor(this.leadList);
                            this.nextDome();
                        }, 0);
                    }
                    sub.unsubscribe();
                });
                // 当前是否继续进行引导
                if (this.isLead) {
                    setTimeout(() => {
                        this.domFor(this.leadList);
                        // 判断是向后查找还是向前查找
                        switch (this.leadStepType) {
                            case 'next': {
                                this.nextDome();
                                break;
                            }
                            case 'last': {
                                this.lastDome();
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                    }, 0);
                }
            });


    }

    // 向后查找
    nextDome(): void {
        if (this.index === this.leadList.length - 1) {
            console.log('最后一步！');
            return;
        }
        this.isRouter();
        if (this.router.url === this.leadList[this.index].router && !!!this.leadList[this.index].HTMLDom) {
            this.index = this.index + 1;
            this.nextDome();
        }
        this.leadInit();
    }

    // 向前查找
    lastDome(): void {
        if (this.index < 0) {
            console.log('第一步！');
            return;
        }
        this.isRouter();
        if (this.router.url === this.leadList[this.index].router && !!!this.leadList[this.index].HTMLDom) {
            this.index = this.index - 1;
            this.lastDome();
        }
        this.leadInit();
    }

    domFor(dom): void {
        // 遍历dom树子节点
        for (const item of dom) {
            if (!!document.getElementById(item.id)) {
                item.HTMLDom = document.getElementById(item.id);
            }
        }
    }

    // 下一步
    next(): void {
        this.index = this.index + 1;
        if (this.index === this.leadList.length) {
            console.log('最后一步');
            return;
        }
        this.leadStepType = 'next';
        if (this.router.url === this.leadList[this.index].router && !!!this.leadList[this.index].HTMLDom) {
            this.index = this.index + 1;
            this.nextDome();
        }
        this.leadInit();
    }

    // 上一步
    last(): void {
        this.index = this.index - 1;
        if (this.index < 0) {
            console.log('第一步');
            return;
        }
        this.leadStepType = 'last';
        this.lastDome();
        this.leadInit();
    }

    // 初始化引导页
    leadInit(): void {
        this.isRouter();
        this.getDom(this.leadList[this.index].HTMLDom);
    }

    // 获取元素位置与宽高
    getDom(item): void {
        if (!!!item) {
            return;
        }
        const w = item.offsetWidth;
        const h = item.offsetHeight;
        const l = item.offsetLeft;
        const t = item.offsetTop;
        const r = document.body.scrollWidth - (w + l);
        const b = document.body.scrollHeight - (h + t);
        window.scrollTo({top: t});
        this.locationAndSize = {w, h, l, r, t, b};
        this.show = true;
    }

    save() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    /*
    * 判断当前页面路由与当前列路由是否一致
    * 如果路由不一致需要进行转跳
    * */
    isRouter(): void {
        if (this.router.url !== this.leadList[this.index].router) {
            this.router.navigate([this.leadList[this.index].router]);
            return;
        }
    }

    ngOnDestroy() {

    }

}
