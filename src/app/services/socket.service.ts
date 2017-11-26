import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import io from "socket.io-client";

@Injectable()
export class SocketService {
    private socket: any;
    message$ = new Subject();

    constructor() {
        //connecting to Socket.IO chat server
        this.socket = io("https://spotim-demo-chat-server.herokuapp.com");
        this.socket.on("connect", function () {
            console.log("connected to chat server!");
        });
        this.socket.on("disconnect", function () {
            console.log("disconnected from chat server!");
        });
        this.socket.on('spotim/chat', (data) => {
            this.message$.next(data);
        });
    }

    emit(avatar, username, text) {
        this.socket.emit('spotim/chat', { avatar, username, text });
    }
}
