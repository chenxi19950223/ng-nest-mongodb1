import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MySockectService } from './my-sockect.service';
import { fromEvent } from 'rxjs';
import VideoLayer = AMap.VideoLayer;

@Component({
    selector: 'app-my-scoket',
    templateUrl: './my-scoket.component.html',
    styleUrls: ['./my-scoket.component.scss']
})
export class MyScoketComponent implements OnInit {
    i = 0;
    src: any;
    textData: string;

    constructor(
        private mySockectService: MySockectService,
        private domSanitizer: DomSanitizer,
    ) {
    }

    ngOnInit(): void {
        this.scoket();
    }

    scoket(): void {
        console.log(1);
        this.mySockectService.onNewMessage().subscribe(msg => {
            console.log(msg.name);
            this.textData = msg.name;
            if (msg.file) {
                console.log(window.URL.createObjectURL(new Blob([new Int8Array(msg.file)])));
                this.src = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob([new Int8Array(msg.file)])));
                const audioElement = new Audio(window.URL.createObjectURL(new Blob([new Int8Array(msg.file)])));
                fromEvent(audioElement, 'loadedmetadata')
                    .subscribe(res => {
                        console.log(res);
                        console.log(audioElement.duration);
                    });
            }
        });
        this.mySockectService.sendMessage('asdf');
    }

    btn(): void {
        this.i++;
        this.mySockectService.emit(this.textData);
    }

    file(e): void {
        this.mySockectService.fileEmit(e.target.files[0]);
    }
    text(e): void {
        if (e.keyCode === 13) {
            console.log(this.textData);
        }
    }

    drag(e): boolean {
        e.preventDefault();
        e.stopPropagation();
        console.log(window.URL.createObjectURL(e.dataTransfer.files[0]));
        return false;
    }

    dragenter(e): boolean {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
        return false;
    }

    dragover(e): boolean {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
        return false;
    }

}
