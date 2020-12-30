import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {SignupComponent} from './authentication/signup/signup.component';
import { SignUp2Component } from './authentication/sign-up2/sign-up2.component';
import { HomeComponent } from './home/home.component';
import {SignupPageComponent} from './signup-page/signup-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sign-up-form', component: SignUp2Component},
  {path: 'login', component: HomeComponent}
//   {path: 'buy-a-car', component :  },
//   {path : 'how-it-works', component : },
//   {path: 'notifications', component : }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
