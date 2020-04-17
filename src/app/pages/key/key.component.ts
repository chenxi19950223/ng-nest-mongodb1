import {Component, OnInit, HostListener} from '@angular/core';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
    right: boolean;
    left: boolean;
    top: boolean;
    bottom: boolean;

    constructor() {
        this.bottom = false;
        this.left = false;
        this.right = false;
        this.top = false;
    }

    ngOnInit() {
    }

    @HostListener('window: keydown', ['$event'])
    keydown(event): void {
        switch (event.keyCode) {
            case 37: {
                this.left = true;
                this.right = false;
                break;
            }
            case 38: {
                this.top = true;
                this.bottom = false;
                break;
            }
            case 39: {
                this.right = true;
                this.left = false;
                break;
            }
            case 40: {
                this.bottom = true;
                this.top = false;
                break;
            }
            default: {
                break;
            }
        }
        if (this.left && this.top) {
            console.log('左上');
        }
        if (this.left && this.bottom) {
            console.log('左下');
        }
        if (this.right && this.top) {
            console.log('右上');
        }
        if (this.right && this.bottom) {
            console.log('右下');
        }
        if (this.left && !this.bottom && !this.top) {
            console.log('左');
        }
        if (this.right && !this.bottom && !this.top) {
            console.log('右');
        }
        if (this.top && !this.left && !this.right) {
            console.log('上');
        }
        if (this.bottom && !this.left && !this.right) {
            console.log('下');
        }
    }

    @HostListener('window: keyup', ['$event'])
    keyup(event): void {
        switch (event.keyCode) {
            case 37: {
                this.left = false;
                break;
            }
            case 38: {
                this.top = false;
                break;
            }
            case 39: {
                this.right = false;
                break;
            }
            case 40: {
                this.bottom = false;
                break;
            }
            default: {
                break;
            }
        }
    }

}
