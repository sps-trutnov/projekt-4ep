import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignInService {
    readonly signedUserChanged = new EventEmitter();

    private _signedUserId: number = null;

    get signedUserId(): number {
        return this._signedUserId;
    }

    signIn(userId: number) {
        this._signedUserId = userId;
        this.signedUserChanged.emit();
    }

    signOut() {
        this._signedUserId = null;
        this.signedUserChanged.emit();
    }
}
