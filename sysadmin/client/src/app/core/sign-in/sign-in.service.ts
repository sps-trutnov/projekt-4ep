import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../users/user';

@Injectable({
    providedIn: 'root'
})
export class SignInService {
    readonly signedUserChanged = new EventEmitter();

    private _signedUser: User = null;

    get signedUser(): User {
        return this._signedUser;
    }

    signIn(user: User) {
        this._signedUser = user;
        this.signedUserChanged.emit();
    }

    signOut() {
        this._signedUser = null;
        this.signedUserChanged.emit();
    }
}
