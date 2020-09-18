import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeadDemoService {
    sub = new Subject();

    constructor() {
    }

    open(): void {
        this.getOpen();
    }

    getOpen(): void {
        this.sub.next(true);
    }
}
