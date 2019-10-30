import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignInService } from '../core/sign-in/sign-in.service';

@Injectable()
export class AuthorizationTokenHttpInterceptor implements HttpInterceptor {
    constructor(private readonly signInService: SignInService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.signInService.signedUserToken;

        if (token !== null) {
            request = request.clone({ 
                setHeaders: {
                    Authorization: `Bearer ${token}`
            }});
        }

        return next.handle(request);
    }
}