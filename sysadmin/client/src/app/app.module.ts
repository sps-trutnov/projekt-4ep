import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { UsersComponent } from './pages/users/users.component';
import { MainNavigationComponent, SIGN_OUT_URL } from './pages/app/main-navigation/main-navigation.component';
import { AlertViewComponent } from './alerts/alert-view/alert-view.component';
import { API_URL } from './core/api/api';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MainFooterComponent } from './pages/app/main-footer/main-footer.component';
import { SIGN_IN_URL } from './routing/can-activates/signed-in-can-activate';
import { SignInService } from './core/sign-in/sign-in.service';
import { UserService } from './core/users/user.service';
import { WithCredentialsHttpInterceptor } from './http-interceptors/with-credentials-http-interceptor';

function initialize(userService: UserService, signInService: SignInService) {
    return async () => {
        let user = await userService.getSignedIn().toPromise();
        if (user !== null)
            signInService.signIn(user.id);
    };
}

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        MainNavigationComponent,
        AlertViewComponent,
        ConfirmDialogComponent,
        MainFooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: WithCredentialsHttpInterceptor,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initialize,
            deps: [UserService, SignInService],
            multi: true
        },
        {
            provide: API_URL,
            useValue: "http://localhost/sysadmin/webApi"
        },
        {
            provide: SIGN_IN_URL,
            useValue: "http://localhost/authentication/signIn.php"
        },
        {
            provide: SIGN_OUT_URL,
            useValue: "http://localhost/authentication/signOut.php?redirectUrl=http://localhost:4200/users"
        }
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
