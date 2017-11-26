import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';

@Injectable()
export class UserService {
    private _user: User;
    
    constructor(private localStorageService: LocalStorageService) { }

    get user(): User {
        return this._user || this.localStorageService.get('user');
    }

    setUser(username, avatarUrl) {
        let savedUser = this.localStorageService.get('user');
        if (!savedUser) {
            savedUser = {
                username: null,
                avatarUrl: null
            };
        }
        savedUser.username = username;
        savedUser.avatarUrl = avatarUrl;
        this._user = savedUser;
        this.localStorageService.set('user', savedUser);
    }
}

export interface User {
    username: string;
    avatarUrl: string;
}
