import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { NgForage } from 'ngforage';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    isLoggedIn = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(
        private ngForage: NgForage,
    ) {
    }

    login(): boolean {
        return true;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
