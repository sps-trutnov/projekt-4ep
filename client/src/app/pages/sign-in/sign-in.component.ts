import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SignInService } from 'src/app/core/sign-in/sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    signInForm = new FormGroup({
        userName: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
    });

    get userNameRequired(): boolean {
        let formControl = this.signInForm.get("userName");
        return formControl.invalid && (formControl.touched || formControl.dirty) && formControl.errors.required;
    }

    get passwordRequired(): boolean {
        let formControl = this.signInForm.get("password");
        return formControl.invalid && (formControl.touched || formControl.dirty) && formControl.errors.required;
    }

    get badUserNameOrPassword(): boolean {
        return this.signInForm.errors && this.signInForm.errors.badUserNameOrPassword
    }

    constructor(private readonly authenticationService: AuthenticationService, private readonly signInService: SignInService, private readonly router: Router) { 
    
    }

    async signIn() {
        let userName = <string>this.signInForm.get("userName").value;
        let password = <string>this.signInForm.get("password").value;

        let result = await this.authenticationService.authenticate(userName, password).toPromise();

        if (result !== null) {
            this.signInService.signIn(result.id, result.token);
            this.router.navigate(["users"]);
        }
        else {
            this.signInForm.setErrors({
                badUserNameOrPassword: true
            });
        }
    }
}
