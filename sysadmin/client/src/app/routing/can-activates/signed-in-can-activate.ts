import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignInService } from 'src/app/core/sign-in/sign-in.service';

@Injectable({
    providedIn: 'root'
})
export class SignedInCanActivate implements CanActivate {
    constructor(private readonly signInService: SignInService, private readonly router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let signedIn = this.signInService.signedUserId !== null;
        if (signedIn)
            return true;
        else {
            this.router.navigate(["sign-in"]);
            return false;
        }
    }
}