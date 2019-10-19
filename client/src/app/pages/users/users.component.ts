import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/users/user.service';
import { User } from 'src/app/core/users/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User[]

    constructor(private readonly userService: UserService) {

    }

    async ngOnInit() {
        this.users = await this.userService.getAll().toPromise();
    }
}
