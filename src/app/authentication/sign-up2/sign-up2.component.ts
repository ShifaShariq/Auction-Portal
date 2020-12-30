import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sign-up2',
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.css']
})
export class SignUp2Component implements OnInit {
  userprofileForm ;
  constructor( private fb :  FormBuilder, private route:  ActivatedRoute ){}
  dName = "";
  dMail= "";
  dNum ="";
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.dName = params['dealershipName'];
      this.dMail = params['dealershipMail'];
      this.dNum = params['dealershipNumber'];

      this.userprofileForm = this.fb.group({
        uname: ['', Validators.required],
        psw: ['', Validators.required ],
        fname: ['', Validators.required ],
        lname: ['', Validators.required ],
        phno: ['+905',  Validators.compose([Validators.minLength(11), Validators.required])],
        dname: [this.dName, Validators.required ],
        dmail: [this.dMail,  Validators.compose([Validators.email, Validators.required])],
        dphno: [this.dNum,  Validators.compose([Validators.minLength(11), Validators.required])],
        addr1: ['', Validators.required ],
        addr2: ['', ],
        city: ['', Validators.required ],
      }); 
    
    
    });
    
  }

register(){

}
}
