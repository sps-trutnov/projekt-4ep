import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationResult } from './authentication-result';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private readonly httpClient: HttpClient) {

    }

    authenticate(userName: string, password: string): Observable<AuthenticationResult> {
        let credentials = {
            userName,
            password
        };
        return this.httpClient.post<AuthenticationResult>("http://localhost/authentication/index.php", credentials);
    }
}
