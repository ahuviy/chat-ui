import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor(private socket: SocketService) { }

    ngOnInit() {
        this.socket.message$.subscribe(msg => {
            console.log('received:', msg);
        });
        // setInterval(() => this.socket.emit('jumbo', 'ahuvi', 'hi!'), 1000);
    }
}
