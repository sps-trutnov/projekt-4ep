import { User } from 'src/app/core/users/user';

export class UserViewModel {
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

    get isUserNameValid() {
        return this.newUserName.length > 0;
    }

    get isPasswordValid() {
        return this.newPassword.length >= 8 || (this.original !== null && this.newPassword === "");
    }

    get isEmailValid() {
        return this.newEmail === "" || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(this.newEmail);
    }

    get isValid() {
        return this.isUserNameValid && this.isPasswordValid && this.isEmailValid;
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