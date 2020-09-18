import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { filter } from 'rxjs/operators';

import { LeadListType } from '../../pages/lead/lead-list-type';
import { Subject } from 'rxjs';
import { LeadDemoService } from './lead-demo.service';

const LEADLIST: LeadListType[] = [
    {id: 'welcome', title: '欢迎页第一项', details: '第一项', router: '/pages/welcome'},
    {id: 'welcome-btn', title: '欢迎页第一项', details: '第一项', router: '/pages/welcome'},
    {id: 'first', title: 'lead页第一项', details: '第一项', router: '/pages/lead'},
    {id: 'aaa', title: 'lead页第二项', details: '第一项', router: '/pages/lead'},
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
export class LeadDemoComponent implements OnInit, AfterViewInit {
    @ViewChild('box', {static: true}) box: ElementRef<HTMLDivElement>;
    leadList: LeadListType[];
    leadDom: Element;
    order: number;
    locationAndSize: LocationAndSizeType;
    show: boolean;
    id: string;

    isLead: boolean;
    sub: Subject<any>;

    constructor(
        private router: Router,
        private http: HttpClient,
        private leadDemoService: LeadDemoService
    ) {

        this.show = false;
        this.order = 0;
        this.leadList = LEADLIST;
        this.sub = new Subject<any>();
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
            )
            .subscribe(event => {
                const sub = this.sub.subscribe(res => {
                    this.isLead = res;
                    if (res) {
                        setTimeout(() => {
                            this.isRouter();
                            this.domFor(this.leadList);
                            this.leadInit();
                        }, 0);
                    }
                    sub.unsubscribe();
                });
                if (this.isLead) {
                    setTimeout(() => {
                        console.log(1)
                        this.isRouter();
                        this.domFor(this.leadList);
                        this.leadInit();
                    }, 0);
                }
            });


    }

    /*
    * 递归遍历元素
    * （因为同一页面已经查找过dom元素所以再次进入页面会出现二次查找问题此处需要优化）
    * */
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
        this.order = this.order + 1;
        if (this.order === this.leadList.length) {
            window.scrollTo({top: 0});
            this.box.nativeElement.style.display = 'none';
            this.isLead = false;
            return;
        }
        this.isRouter();
        if (this.router.url === this.leadList[this.order].router && !!!this.leadList[this.order].HTMLDom) {
            this.order = this.order + 1;
        }
        this.leadInit();
    }

    // 上一步
    last(): void {
        this.isRouter();
        this.order = this.order - 1;
        if (this.order < 0) {
            window.scrollTo({top: 0});
            this.box.nativeElement.style.display = 'none';
            return;
        }
        if (!this.leadList[this.order].HTMLDom) {
            this.order = this.order - 1;
        }
        this.leadInit();
    }

    // 初始化引导页
    leadInit(): void {
        this.isRouter();
        this.getDom(this.leadList[this.order].HTMLDom);
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
        this.leadDemoService.sub
            .subscribe(res => {
                this.box.nativeElement.style.display = 'block';
                this.order = 0;
                this.sub.next(true);
            });
        this.http.post('http://192.168.15.213:3000/load', {})
            .subscribe((res: any) => {
                if (res.isLead) {
                    this.sub.next(res.isLead);
                }
            });
    }

    ngAfterViewInit() {
    }

    /*
    * 判断当前页面路由与当前列路由是否一致
    * 如果路由不一致需要进行转跳
    * */
    isRouter(): void {
        if (this.router.url !== this.leadList[this.order].router) {
            this.router.navigate([this.leadList[this.order].router]);
            return;
        }
    }

}
