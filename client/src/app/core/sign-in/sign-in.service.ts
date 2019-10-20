import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignInService {
    private readonly userId: number;
    private readonly userToken: number;

    signIn(userId: number, userToken: string) {

    }

    signOut() {

    }
}
