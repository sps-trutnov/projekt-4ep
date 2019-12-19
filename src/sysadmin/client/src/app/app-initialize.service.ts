import { Injectable } from '@angular/core';
import { UserService } from './core/users/user.service';
import { SignInService } from './core/sign-in/sign-in.service';

@Injectable({
    providedIn: 'root'
})
export class AppInitializeService {
    constructor(private readonly userService: UserService, private readonly signInService: SignInService) {

    }

    async intialize() {
        let user = await this.userService.getSignedIn().toPromise();
        if (user !== null)
            this.signInService.signIn(user);
    }
}
