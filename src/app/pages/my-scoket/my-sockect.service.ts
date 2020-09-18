import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
    providedIn: 'root'
})
export class MySockectService {
    private socket: SocketIOClient.Socket;
    constructor() {
        this.socket = io('http://192.168.15.213:81');
    }
    sendMessage(msg: string) {
        this.socket.on('connect',  (res) => {
            this.socket.emit('events', {
                name: 'cx'
            });
        });
    }

    emit(i): void {
        this.socket.emit('events', {
            name: i
        });
    }
    onNewMessage() {
        return Observable.create(observer => {
            this.socket.on('events', msg => {
                observer.next(msg);
            });
        });
    }

    fileEmit(file): any {
        this.socket.emit('events', {file});
    }
}
