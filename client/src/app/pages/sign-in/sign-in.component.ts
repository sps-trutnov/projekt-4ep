import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SignInService } from 'src/app/core/sign-in/sign-in.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    signInForm = new FormGroup({
        userName: new FormControl(""),
        password: new FormControl("")
    });

    constructor(private readonly authenticationService: AuthenticationService, private readonly signInService: SignInService) { 

    }

    signIn() {

    }
}
