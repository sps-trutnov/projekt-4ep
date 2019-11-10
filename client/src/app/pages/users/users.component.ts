import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { UserService } from 'src/app/core/users/user.service';
import { User } from 'src/app/core/users/user';
import { UserViewModel } from './user-view-model';
import { AlertService } from 'src/app/alerts/alert.service';
import { AlertType } from 'src/app/alerts/alert-type';
import { UserNameAlreadyUsedError } from 'src/app/core/users/user-name-already-used-error';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, DoCheck {
    users: UserViewModel[];
    newUser: UserViewModel;

    get canSaveAll(): boolean {
        return this.users !== undefined && this.users.some(u => (u.isChanged || u.original === null) && u !== this.newUser)
    }

    get canDiscardAll(): boolean {
        return this.users !== undefined && this.users.some(u => (u.isChanged || u.original === null) && u !== this.newUser)
    }

    get isAllValid(): boolean {
        return this.users === undefined || this.users.every(u => u.isValid || u === this.newUser);
    }

    constructor(private readonly userService: UserService, private readonly alertService: AlertService) { 
        
    }

    async ngOnInit() {
        this.users = (await this.userService.getAll().toPromise())
            .map(u => new UserViewModel(u, u.userName, "", u.email, u.isLibrarian, u.isAdministrator));
        this.addNewUser();
    }

    ngDoCheck() {
        if (this.newUser != undefined && this.newUser.isChanged) 
            this.addNewUser();
    }

    addNewUser() {
        this.newUser = new UserViewModel(null, "", "", "", false, false);
        this.users.unshift(this.newUser);
    }

    async save(user: UserViewModel) {
        let newUser;
        if (user.original != null) {
            let u = new User(user.original.id, user.newUserName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
            let newPassword = user.newPassword === "" ? undefined : user.newPassword;
            try {
                newUser = await this.userService.update(u, newPassword).toPromise();
            } 
            catch(e) {
                if (e instanceof UserNameAlreadyUsedError) {
                    this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, AlertType.error);
                    return;
                }
                throw e;
            }
        }
        else {
            let u = new User(0, user.newUserName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
            try {
                newUser = await this.userService.add(u, user.newPassword).toPromise();
            } 
            catch(e) {
                if (e instanceof UserNameAlreadyUsedError) {
                    this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, AlertType.error);
                    return;
                }
                throw e;
            }
        }
        user.original = newUser;
        user.resetToOriginal();
    }

    discard(user: UserViewModel) {
        if (user.original == null)
            this.users.splice(this.users.indexOf(user), 1);
        else
            user.resetToOriginal();
    }

    async remove(user: UserViewModel) {
        await this.userService.remove(user.original).toPromise();
        this.users.splice(this.users.indexOf(user), 1);
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
