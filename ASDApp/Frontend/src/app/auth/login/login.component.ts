import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;

  constructor(private authService: AuthService,private router: Router,private fb: FormBuilder) { 
    this.createForm();
  
  }

  ngOnInit() {
  }

 /* onLogin(form):void{
    this.authService.login(form.value).subscribe(res=>{
      if(this.authService.getDisability()==="autism"){
      this.router.navigateByUrl('/main/homeAutism');
      }else {
        this.router.navigateByUrl('/main/homeSindromDown');
      }
    });
  }*/
  onLogin(email,parola):void{
  
  
    this.authService.login(email,parola).subscribe(res=>{
      if(this.authService.getDisability()==="autism"){
      this.router.navigateByUrl('/main/homeAutism');
      }else {
        this.router.navigateByUrl('/main/homeSindromDown');
      }
    });
  }


  
 

  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      parola: ['', Validators.required ]
    });
  }
}
