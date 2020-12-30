import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor (private fb :FormBuilder, private router : Router){}
  title = "Register Now";
  userprofileForm = this.fb.group({
    dname : ['', Validators.required],
    dmail : ['', Validators.required],
    dphno : ['', Validators.required]
  })

  OnSelect(){
    this.router.navigate(['sign-up-form'], 
    { queryParams: { dealershipName : this.userprofileForm.controls['dname'].value, 
                     dealershipMail: this.userprofileForm.controls['dmail'].value, 
                     dealershipNumber: this.userprofileForm.controls['dphno'].value } });
  }

}
