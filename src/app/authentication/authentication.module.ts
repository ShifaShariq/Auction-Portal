import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUp2Component } from './sign-up2/sign-up2.component';
import {RouterModule } from '@angular/router';
import { from } from 'rxjs';
// import "node_modules\@fortawesome\fontawesome-free\css\all.css";
@NgModule({
  declarations: 
  [LoginComponent, 
  SignupComponent, SignUp2Component
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports: [
    LoginComponent,
    SignupComponent
  ]
})
export class AuthenticationModule { }
