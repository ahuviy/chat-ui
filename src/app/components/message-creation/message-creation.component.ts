import { Component } from '@angular/core';

import { avatars } from '../../app.data';
import { UserService } from '../../services/user.service';
import { SocketService } from '../../services/socket.service';

@Component({
    selector: 'ch-message-creation',
    templateUrl: './message-creation.component.html',
    styleUrls: ['./message-creation.component.scss']
})
export class MessageCreationComponent {
    avatarUrl: string;
    username: string;
    message: string;

    constructor(
        private userService: UserService,
        private socketService: SocketService
    ) { }

    ngOnInit() {
        if (!this.userService.user) {
            this.avatarUrl = this.getRandomAvatarUrl();
            this.userService.setUser(null, this.avatarUrl);
        }
        this.avatarUrl = this.userService.user.avatarUrl;
        this.username = this.userService.user.username;
    }

    updateUsername(username) {
        this.userService.setUser(username, this.avatarUrl);
    }

    sendMessage() {
        this.socketService.emit(this.avatarUrl, this.username, this.message);
        this.message = null;
    }

    private getRandomAvatarUrl() {
        return avatars[Math.floor(Math.random() * avatars.length)].url;
    }
}
