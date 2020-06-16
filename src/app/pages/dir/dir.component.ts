import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { fromEvent, Observable, Subject } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'fs';

class ImageSnippet {
    constructor(public src: string, public file: File) {
    }
}

@Component({
    selector: 'app-dir',
    templateUrl: './dir.component.html',
    styleUrls: ['./dir.component.scss'],
})
export class DirComponent implements OnInit {
    img: any;
    selectedFile: ImageSnippet;
    id = 123456;

    @ViewChild('content', {static: true}) con: ElementRef<HTMLDivElement>;

    finalL = [
        ['Team1', 'Description1', 'Application1'],
        ['Team1', 'Description2', 'Application2'],
        ['Team1', 'Description3', 'Application3'],
        ['Team2', 'Description1', 'Application1'],
        ['Team2', 'Description2', 'Application2'],
        ['Team2', 'Description3', 'Application3'],
    ];

    data() {
        // First find distinct teams and then filter information about him
        return this.finalL.map(x => x[0])
            .filter((v, i, a) => a.indexOf(v) === i)
            .map(x => ({
                name: x,
                data: this.finalL.filter(y => y[0] === x),
            }));
    }

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer,
    ) {
        let idx: number;
        const obs = Observable.create((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });
    }

    ngOnInit(): void {
        this.data();
        console.log(this.con.nativeElement.clientWidth);
        console.log(this.con.nativeElement.clientHeight);
        this.con.nativeElement.style.backgroundColor = '#448aff';
    }

    onUploadClick(imageInput): void {
        const file: File = imageInput.files[0];
        // console.log(file);
        // this.img = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        // console.log(this.img)

        const formData = new FormData();
        // console.log(file);
        formData.append('file', file);
        formData.set('url', '/home/gj107/testFile/aaa.pem');
        console.log(formData);

        let request;
        // console.log(file);
        // const req = new HttpRequest('POST', 'http://10.0.0.41:3005/deviceHttpsCertificateUpload', formData,
        // //     {
        // //     // headers: new HttpHeaders({
        // //     //     // 'content-type': 'application/json',
        // //     //     'Access-Control-Allow-Origin': 'true'
        // //     // }),
        // //
        // //     reportProgress: true, withCredentials: false
        // // }
        // //     {
        // //         reportProgress: true
        // //     }
        // );
        // request = this.http.request(req);
        // request.subscribe(res => console.log(res));
        // console.log(1)

        this.http.post('http://10.0.0.41:3005/deviceHttpsCertificateUpload', formData)
            .subscribe((res: any) => {
                console.log(res.data)
                this.img = res.data;
            });
        // this.http.post('http://127.0.0.1:3000/user/file', formData)
        //     .subscribe((res: any) => {
        //         console.log(res.data)
        //         this.img = res.data;
        //     });

    }

}
