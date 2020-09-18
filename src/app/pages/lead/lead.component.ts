import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LeadListType } from './lead-list-type';
import { RouterService } from '../router.service';
import { LeadDemoComponent } from '../../component/lead-demo/lead-demo.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit, OnDestroy {
    leadList: LeadListType[];
    @ViewChild('box', {static: true}) box: ElementRef<HTMLDivElement>;
    constructor(
        private routerService: RouterService
    ) {
        this.leadList = [
            {id: 'search', title: '当前引导第一项', details: '这是一个搜索功能按钮', router: 'home'},
            {id: 'add', title: '引导第二项', details: '这是一个新增功能按钮', router: 'home'},
            {id: 'userName', title: '引导第三项', details: '这是一个用户账号输入框', router: 'login'},
            {id: 'delete', title: '引导第四项', details: '这是一个删除功能按钮', router: 'page'},
            {id: 'img', title: '引导第五项', details: '这是一个图片查看区域', router: 'home'}
        ];
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}
