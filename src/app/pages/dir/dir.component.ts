import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { fromEvent, Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-dir',
    templateUrl: './dir.component.html',
    styleUrls: ['./dir.component.scss'],
})
export class DirComponent implements OnInit {
    constructor(
        private http: HttpClient,
    ) {

        let idx: number;
        const obs = Observable.create((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        })
        obs.subscribe(res => console.log(res))
        const sub = new Subject();
        sub.subscribe({
            next: res => console.log(res)
        })
        sub.next(1);
        let i = 2;
        setInterval(() => {
            sub.next(i++);
            if (i >= 10) {
                sub.complete();
            }
        }, 1000);
        const a = this.a();
        console.log(a.next());
        console.log(a.next());
        console.log(a.next());
        console.log(a.next());
        console.log(a.next());
        console.log(a.next());
        console.log(a.next());
        console.log(a.next());
    }


    *a(): any {
        yield 'sdfg';
        yield 'asd';
        return 'sdf';
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
