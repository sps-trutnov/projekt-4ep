import { User } from 'src/app/core/users/user';
import { EventEmitter } from '@angular/core';

export class UserViewModel {
    //readonly changed: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public original: User,
        public newUserName: string,
        public newPassword: string,
        public newEmail: string,
        public newIsLibrarian: boolean,
        public newIsAdministrator: boolean
    ) { }

    get isChanged(): boolean {
        if (this.original == null) {
            return this.newUserName !== "" || this.newPassword !== "" || this.newEmail !== "" || this.newIsLibrarian !== false ||
                this.newIsAdministrator !== false;
        }
        else {
            return this.newUserName !== this.original.userName || this.newPassword !== "" || this.newEmail !== this.original.email ||
                this.newIsLibrarian !== this.original.isLibrarian || this.newIsAdministrator !== this.original.isAdministrator;
        }
    }

    resetToOriginal() {
        if (this.original !== null) {
            this.newUserName = this.original.userName;
            this.newPassword = "";
            this.newEmail = this.original.email;
            this.newIsLibrarian = this.original.isLibrarian;
            this.newIsAdministrator = this.original.isAdministrator;
        } else {
            this.newUserName = "";
            this.newPassword = "";
            this.newEmail = "";
            this.newIsLibrarian = false;
            this.newIsAdministrator = false;
        }
    }
}