import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import io from "socket.io-client";

if (environment.production) {
    enableProdMode();
}

//connecting to Socket.IO chat server
const socket = io("https://spotim-demo-chat-server.herokuapp.com");
socket.on("connect", function () {
    console.log("connected to chat server!");
});
socket.on("disconnect", function () {
    console.log("disconnected from chat server!");
});

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
