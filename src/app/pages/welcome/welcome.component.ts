import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';
import { AsyncSubject } from 'rxjs';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
    loginForm: FormGroup;
    @ViewChild('can', {static: true}) canvasRef: ElementRef;

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
    ) {
        this.loginForm = this.formBuilder.group({
            userName: [null, [Validators.required]],
            passWord: [null, [Validators.required]],
        });
    }

    ngOnInit() {
        // this.http.put('/api', 'text')
        //     .subscribe(res => {
        //         console.log(res);
        //     });

    }

    submitForm(): void {
    }

}
