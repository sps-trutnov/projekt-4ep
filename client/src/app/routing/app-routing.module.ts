import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { UsersComponent } from '../pages/users/users.component';
import { SignedOutCanActivate } from './can-activates/signed-out-can-activate';
import { SignedInCanActivate } from './can-activates/signed-in-can-activate';

const routes: Routes = [
    { path: "sign-in", component: SignInComponent, canActivate: [SignedOutCanActivate] },
    { path: "users", component: UsersComponent, canActivate: [SignedInCanActivate] },
    { path: "**", redirectTo: "sign-in" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
