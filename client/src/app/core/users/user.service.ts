import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public constructor(private readonly httpClient: HttpClient) {

    }

    getAll(): Observable<User[]> {
        return this.httpClient.get<User[]>("http://localhost/users/index.php").pipe(
            map(u => u.map(u => new User(u.id, u.userName, u.email, u.isLibrarian, u.isAdministrator)))
        );
    }

    getById(id: number): Observable<User> {
        return this.httpClient.get<User>(`http://localhost/users/index.php?id=${id}`).pipe(
            map(u => new User(u.id, u.userName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    add(user: User, password: string): Observable<User> {
        let { id, ...withoutId } = user;
        let withPassword = { ...withoutId, password };

        return this.httpClient.post<User>("http://localhost/users/index.php", withPassword).pipe(
            map(u => new User(u.id, u.userName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    update(user: User, password: string | undefined): Observable<User> {
        let userData = password === undefined ? user : { ...user, password };

        return this.httpClient.put<User>(`http://localhost/users/index.php?id=${user.id}`, userData).pipe(
            map(u => new User(u.id, u.userName, u.email, u.isLibrarian, u.isAdministrator))
        );
    }

    remove(user: User): Observable<any> {
        return this.httpClient.delete(`http://localhost/users/index.php?id=${user.id}`);
    }
}