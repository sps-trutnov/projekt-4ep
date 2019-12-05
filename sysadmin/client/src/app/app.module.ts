import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthorizationTokenHttpInterceptor } from './http-interceptors/authorization-token-http-interceptor';
import { MainNavigationComponent } from './pages/app/main-navigation/main-navigation.component';
import { AlertViewComponent } from './alerts/alert-view/alert-view.component';
import { API_URL } from './core/api/api';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MainFooterComponent } from './pages/app/main-footer/main-footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
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
            useClass: AuthorizationTokenHttpInterceptor,
            multi: true
        },
        {
            provide: API_URL,
            useValue: "http://localhost"
        }
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
