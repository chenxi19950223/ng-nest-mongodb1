import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LeadListType } from './lead-list-type';
import { RouterService } from '../router.service';
import { LeadDemoComponent } from '../../component/lead-demo/lead-demo.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit, OnDestroy {
    leadList: LeadListType[];
    @ViewChild('box', {static: true}) box: ElementRef<HTMLDivElement>;

    constructor(
        private routerService: RouterService,
        private http: HttpClient
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
        this.http.get('http://saas.dam.scsoft.com.cn:13106/api/monitor-category/info?format=json',
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + ' ' + 'eyJhbGciOiJIUzUxMiJ9.eyJNWTpEQVRBOiI6eyJNWTpBQ0NPVU5UIjp7ImlkIjoiMzFlYzYxODJjODBjNGMyYmEwYzc2NjZmNDhiNzRhZmEiLCJhY2NvdW50TmFtZSI6Im5seHVzZXIiLCJwYXNzd29yZCI6bnVsbCwiaXNBbGxvd1BjIjpudWxsLCJpc0FsbG93QXBwIjpudWxsLCJpc0VuYWJsZSI6bnVsbCwiaXNBZHVpdCI6bnVsbH19LCJNWTpEQVRBOkVYVDoiOnsiT05FLVVBIjoiMSJ9LCJpc3MiOiJvbmUiLCJhdWQiOiJvbmUiLCJzdWIiOiJubHh1c2VyOmU4MTRmMGEwODllNzRiZjBiZGQ4ZTA0ZDQ2ZmY4ZmY0IiwiZXhwIjoxNjAyODI4NjEzLCJuYmYiOjE2MDI3NDIyMTMsImlhdCI6MTYwMjc0MjIxM30.3WuaMvxyaMJ2FlGxOaoGnWcEZLCkJI9qmRUA0vLoDG8o8SGuplYaY1gUkqk5Jn2wZxa_4SfXcG26x05ci7pUUw'
                },
            }
        ).subscribe(res => {
            console.log(res);
        });
    }

    ngOnDestroy(): void {
    }

}
