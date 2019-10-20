import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/users/user.service';
import { User } from 'src/app/core/users/user';
import { UserViewModel } from './user-view-model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: UserViewModel[];

    constructor(private readonly userService: UserService) {

    }

    async ngOnInit() {
        this.users = (await this.userService.getAll().toPromise())
            .map(u => new UserViewModel(u, u.userName, "", u.email, u.isLibrarian, u.isAdministrator));
        this.users.unshift(new UserViewModel(null, "", "", "", false, false));
    }

    get isAnyChanged(): boolean {
        return this.users !== undefined && this.users.some(u => u.isChanged);
    }

    async save(user: UserViewModel) {
        let newUser;
        if (user.original != null) {
            let u = new User(user.original.id, user.newUserName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
            let newPassword = user.newPassword === "" ? undefined : user.newPassword;
            newUser = await this.userService.update(u, newPassword).toPromise();
        }
        else {
            let u = new User(0, user.newUserName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
            newUser = await this.userService.add(u, user.newPassword).toPromise();
        }
        user.original = newUser;
        user.newUserName = newUser.userName;
        user.newPassword = "";
        user.newEmail = newUser.email;
        user.newIsLibrarian = newUser.isLibrarian;
        user.newIsAdministrator = newUser.isAdministrator;
    }

    discard(user: UserViewModel) {
        if (user.original == null)
            this.users.splice(this.users.indexOf(user), 1);
        else {
            user.newUserName = user.original.userName;
            user.newPassword = "";
            user.newEmail = user.original.email;
            user.newIsLibrarian = user.original.isLibrarian;
            user.newIsAdministrator = user.original.isAdministrator;
        }
    }

    saveAll() {
        this.users
            .filter(u => u.isChanged)
            .forEach(u => this.save(u));
    }

    discardAll() {
        this.users
            .filter(u => u.isChanged)
            .forEach(u => this.discard(u));
    }
}
