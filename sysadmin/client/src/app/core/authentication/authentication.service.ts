import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { AuthenticationResult } from './authentication-result';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../api/api';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private readonly httpClient: HttpClient, @Inject(API_URL) private readonly apiUrl: string) {

    }

    authenticate(userName: string, password: string): Observable<AuthenticationResult> {
        let credentials = {
            userName,
            password
        };
        return this.httpClient.post<AuthenticationResult>(`${this.apiUrl}/authentication/index.php`, credentials).pipe(
            catchError((e: HttpErrorResponse) => e.status === 401 ? of(null) : throwError(e))
        );
    }
}
