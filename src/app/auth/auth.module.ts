import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, AccountComponent, LoginFormComponent, EditAccountComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [LoginFormComponent]
})
export class AuthModule { }
