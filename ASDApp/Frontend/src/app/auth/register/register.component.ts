import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  autism:string;
  sindromDown:string;
  angForm: FormGroup;

  constructor(private authService: AuthService,private router: Router,private fb: FormBuilder) { 
    this.createForm();
  
  }
 
  ngOnInit() {
  }

  /*onRegister(form):void{
    
    form.value.autism=this.autism;
    form.value.sindromDown=this.sindromDown;
    console.log(form.value);
    this.authService.register(form.value).subscribe(res=>{

      this.router.navigateByUrl('/main/login');
    });
  }*/
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      parola: ['', Validators.required ],
      d:[]
    });
  }
  onRegister(name,email,parola):void{
    
  //  form.value.autism=this.autism;
   // form.value.sindromDown=this.sindromDown;
   // console.log(form.value);
   console.log(parola)
    this.authService.register(name,email,parola,this.autism,this.sindromDown).subscribe(res=>{

      this.router.navigateByUrl('/main/login');
    });
  }
  checka(event){
    
    this.autism="true";
    this.sindromDown="false";
    console.log(this.autism);
    console.log(this.sindromDown);
    
  }
  checks(event){
    
    this.autism="false";
    this.sindromDown="true";
    console.log(this.autism);
    console.log(this.sindromDown);
    
  }

 

}
