import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user';
import { UserNameAlreadyUsedError } from './user-name-already-used-error';
import { API_URL } from '../api/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public constructor(private readonly httpClient: HttpClient, @Inject(API_URL) private readonly apiUrl: string) {

    }

    getAll(options: { idFilter?: number, userNameFilter?: string, firstNameFilter?: string, lastNameFilter?: string, emailFilter?: string, 
        isLibrarianFilter?: boolean, isAdministratorFilter?: boolean } = {}): Observable<User[]> {
        let parameters = {
            ...options.idFilter !== undefined && { "id-filter": options.idFilter.toString() },
            ...options.userNameFilter !== undefined && { "user-name-filter": options.userNameFilter },
            ...options.firstNameFilter !== undefined && { "first-name-filter": options.firstNameFilter },
            ...options.lastNameFilter !== undefined && { "last-name-filter": options.lastNameFilter },
            ...options.emailFilter !== undefined && { "email-filter": options.emailFilter },
            ...options.isLibrarianFilter !== undefined && { "is-librarian-filter": options.isLibrarianFilter.toString() },
            ...options.isAdministratorFilter !== undefined && { "is-administrator-filter": options.isAdministratorFilter.toString() }
        };

        return this.httpClient.get<User[]>(`${this.apiUrl}/users/index.php`, { params: parameters }).pipe(
            map(u => u.map(u => new User(u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)))
        );
    }

    getById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.apiUrl}/users/index.php?id=${id}`).pipe(
            map(u => new User(u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    getSignedIn(): Observable<User> {
        return this.httpClient.get<User>(`${this.apiUrl}/users/index.php?id=`).pipe(
            catchError((e: HttpErrorResponse) => e.status === 401 ? of(null) : throwError(e)),
            map(u => u === null ? null : new User(u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    add(user: User, password: string): Observable<User> {
        let { id, ...withoutId } = user;
        let withPassword = { ...withoutId, password };

        return this.httpClient.post<User>(`${this.apiUrl}/users/index.php`, withPassword).pipe(
            catchError((e: HttpErrorResponse) => e.status === 409 ? throwError(new UserNameAlreadyUsedError()) : throwError(e)),
            map(u => new User(u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    update(user: User, password: string | undefined): Observable<User> {
        let userData = password === undefined ? user : { ...user, password };

        return this.httpClient.put<User>(`${this.apiUrl}/users/index.php?id=${user.id}`, userData).pipe(
            catchError((e: HttpErrorResponse) => e.status === 409 ? throwError(new UserNameAlreadyUsedError()) : throwError(e)),
            map(u => new User(u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    remove(user: User): Observable<any> {
        return this.httpClient.delete(`${this.apiUrl}/users/index.php?id=${user.id}`);
    }
}