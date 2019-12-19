import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../pages/users/users.component';
import { SignedInCanActivate } from './can-activates/signed-in-can-activate';

const routes: Routes = [
    { path: "users", component: UsersComponent, canActivate: [SignedInCanActivate] },
    { path: "**", redirectTo: "users" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
