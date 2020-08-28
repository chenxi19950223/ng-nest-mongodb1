import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MySockectService {

    private socket: SocketIOClient.Socket;
    constructor() {
        this.socket = io('http://192.168.15.213:3000');
    }
    sendMessage(msg: string) {
        this.socket.on('connect',  (res) => {
            console.log('链接成功');
            this.socket.emit('events', {
                name: 'cx'
            });

            // 发射
            // 发射
            // socket.emit('identity', 0, (response) => console.log('Identity:', response));
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
}
