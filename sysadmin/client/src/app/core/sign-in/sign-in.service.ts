import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignInService {
    readonly signedUserChanged = new EventEmitter();

    private _signedUserId: number = null;
    private _signedUserToken: string = null;

    get signedUserId(): number {
        return this._signedUserId;
    }

    get signedUserToken(): string {
        return this._signedUserToken;
    }

    signIn(userId: number, userToken: string) {
        this._signedUserId = userId;
        this._signedUserToken = userToken;
        this.signedUserChanged.emit();
    }

    signOut() {
        this._signedUserId = null;
        this._signedUserToken = null;
        this.signedUserChanged.emit();
    }
}
