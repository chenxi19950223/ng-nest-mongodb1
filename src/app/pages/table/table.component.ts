import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

    constructor(
        private http: HttpClient,
    ) {

    }


    ngOnInit(): void {
        this.http.get('http://127.0.0.1:3000/user/query')
            .subscribe(res => {
                console.log(res);
            });
    }

}
