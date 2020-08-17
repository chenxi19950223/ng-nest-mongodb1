import { Component, OnInit, SkipSelf, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { interval, Observable, of, Subscribable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SelfService } from './services/self.service';

import * as moment from 'moment';

@Component({
    selector: 'app-service-demo',
    templateUrl: './service-demo.component.html',
    styleUrls: ['./service-demo.component.scss'],
})
export class ServiceDemoComponent implements OnInit, OnDestroy, AfterViewInit {
    form: FormGroup;
    date: Date = new Date('2020-8-11 12:15:00');
    time: Date = new Date();
    a = false;

    @ViewChild('box', {static: true}) box: ElementRef<HTMLDivElement>;

    constructor(
        private formBuilder: FormBuilder,
        @SkipSelf() private self?: SelfService,
    ) {
        this.form = this.formBuilder.group({
            name: ''
        });
    }

    add(): Observable<any> {
        return of(1, 2, 2, 3);
    }

    save(): Observable<any> {
        return Observable.create(observer => observer.next(1000));
    }

    sn(): void {
        Promise.all([this.add().toPromise(), this.save().toPromise()]).then(res => console.log(res));
    }

    ngOnInit(): void {
        this.sn();
    }

    onTime(): void {
        const a = 10;
    }

    async f(): Promise<any> {
        return Promise.resolve(1);
    }


    ngOnDestroy(): void {
    }

    ngAfterViewInit(): void {
        console.log(this.box.nativeElement.clientWidth);
        setTimeout(() => console.log(this.box.nativeElement.clientWidth), 0);
    }

}
