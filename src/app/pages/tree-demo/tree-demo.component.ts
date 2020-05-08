import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-tree-demo',
    templateUrl: './tree-demo.component.html',
    styleUrls: ['./tree-demo.component.scss'],
})
export class TreeDemoComponent implements OnInit {

    constructor(
        private http: HttpClient,
    ) {
    }

    ngOnInit() {
        // this.http.get('api/user/query')
        //     .subscribe(res => {
        //         console.log(res);
        //     });
    }

    btn(): void {
        this.http.post('api/user/save', {userName: '李四FG', passWord: '12345645FG64', account: 'DDFGFG'})
            .subscribe(res => {
                console.log(res);
            })
    }

}
