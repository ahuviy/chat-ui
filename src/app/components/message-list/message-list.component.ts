import { Component } from '@angular/core';

import { SocketService, Message } from '../../services/socket.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'ch-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
    messages: Message[] = [];

    constructor(
        private socketService: SocketService,
        public userService: UserService
    ) { }

    ngOnInit() {
        this.socketService.message$.subscribe((msg: Message) => {
            this.messages.unshift(msg);
        });
    }
}
