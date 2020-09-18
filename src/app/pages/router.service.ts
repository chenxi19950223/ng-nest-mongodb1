import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RouterService {

    a = 0;
    constructor() {
    }

    add(): number {
        return this.a ++;
    }
}
