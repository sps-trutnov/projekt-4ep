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
            map(u => u.map(u => new User(u.id, u.userName, u.email)))
        );
    }

    getById(id: number): Observable<User> {
        return this.httpClient.get<User>(`http://localhost/users/index.php?id=${id}`).pipe(
            map(u => new User(u.id, u.userName, u.email))
        );
    }

    add(user: User): Observable<User> {
        let { id, ...userWithoutId } = user;

        return this.httpClient.post<User>("http://localhost/users/index.php", userWithoutId).pipe(
            map(u => new User(u.id, u.userName, u.email))
        );
    }

    update(user: User): Observable<User> {
        return this.httpClient.put<User>(`http://localhost/users/index.php?id=${user.id}`, user).pipe(
            map(u => new User(u.id, u.userName, u.email))
        );
    }

    remove(user: User): Observable<any> {
        return this.httpClient.delete(`http://localhost/users/index.php?id=${user.id}`);
    }
}