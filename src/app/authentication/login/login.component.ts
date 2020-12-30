import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators  } from '@angular/forms';
import {Users} from '../../users-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb :  FormBuilder){
  }
  title = "Sign In"; 
  users = Users;

  userprofileForm = this.fb.group({
    uname: ['', Validators.required],
    psw: ['', Validators.required ]
  });
  
  login(){
    console.warn(this.userprofileForm.value); 

  const user = this.users.find(x=> x.username === this.userprofileForm.controls['uname'].value && x.password === this.userprofileForm.controls['psw'].value)
  if (!user){
    window.alert("Incorrect credentials entered!")
    }
  else{
    window.alert("You're logged in successfully!")
    }
  }
}
