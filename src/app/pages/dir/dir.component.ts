import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-dir',
    templateUrl: './dir.component.html',
    styleUrls: ['./dir.component.scss'],
})
export class DirComponent implements OnInit {
    constructor(
        private http: HttpClient,
    ) {
        this.aaa();
        let idx: number;
    }

    async aaa(){
        try {
            const b = await this.add();
            const c = await this.save();
            console.log(b);
            console.log(c);
        } catch (e) {
            console.log(e)
        }
    }

    add(): Promise<any> {
        return new Promise((resolve, reject) => reject('aaa'))
    }

    save(): Promise<any> {
        return new Promise((resolve, reject) => reject('接口二返回的数据'));
    }

    ngOnInit(): void {
    }

    onFile(event): void {
        const input = event.target;
        const reader = new FileReader();
        reader.readAsArrayBuffer(input.files[0]);
        fromEvent(reader, 'load')
            .subscribe(res => {
                this.http.post('/api/user/file', res.target)
                    .subscribe(res => {
                        console.log(res)
                    })
            })
    }

}
