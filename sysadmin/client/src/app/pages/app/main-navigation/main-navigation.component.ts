import { Component, OnInit, OnDestroy, InjectionToken, Inject } from '@angular/core';
import { User } from 'src/app/core/users/user';
import { Subscription } from 'rxjs';
import { SignInService } from 'src/app/core/sign-in/sign-in.service';
import { UserService } from 'src/app/core/users/user.service';
import { Router } from '@angular/router';

export const SIGN_OUT_URL = new InjectionToken<string>("Sign out page url.");

@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit, OnDestroy {
    signedUser: User;
    private signedUserChangedSubscription: Subscription;

    constructor(private readonly signInService: SignInService, private readonly userService: UserService, private readonly router: Router,
        @Inject(SIGN_OUT_URL) private readonly signOutUrl: string) {

    }

    ngOnInit() {
        this.updateSignedUser();
        this.signedUserChangedSubscription = this.signInService.signedUserChanged.subscribe(() => this.updateSignedUser());
    }

    ngOnDestroy() {
        this.signedUserChangedSubscription.unsubscribe();
    }

    private async updateSignedUser() {
        let id = this.signInService.signedUserId;

        if (id === null)
            this.signedUser = null;
        else
            this.signedUser = await this.userService.getById(id).toPromise();
    }

    signOut() {
        this.signInService.signOut();
        window.location.href = this.signOutUrl;
    }
}
