import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationStart, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
    selector: 'app-dir-demo',
    templateUrl: './dir-demo.component.html',
    styleUrls: ['./dir-demo.component.scss'],
})
export class DirDemoComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.router.events
            .pipe(
                filter(event => event instanceof ActivationStart),
            )
            .subscribe((res: ActivationStart) => {
                console.log(res.snapshot.params.name);
            });
    }

    ngOnInit() {
        console.log(1);
    }

}
