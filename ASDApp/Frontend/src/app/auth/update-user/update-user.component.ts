import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user: any = {};
  angForm: FormGroup;
  id:string;
  userDetails:User[];
  ang1Form: FormGroup;
  disability: string;
  a:boolean=false;
  sd:boolean=false;
   
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService,
    private fb: FormBuilder) {
      this.id=authService.getID()
      this.createForm();
      this.createForm1();
      this.disability=authService.getDisability();
      if(this.disability=="autism")
      this.a=true;
      else this.sd=true;
     
    }
 

  createForm() {
    this.angForm = this.fb.group({
        username: ['', Validators.required ]
       
      });
    }
    createForm1() {
      this.ang1Form = this.fb.group({
         
          password: ['', Validators.required ]
         
        });
      }
  

  ngOnInit() {
    this.authService
      .getUsers(this.id)
      .subscribe((data: User[]) => {
        this.userDetails = data;
        console.log(this.userDetails);
    });
    
    
  }
  updateUser(username) {
    this.route.params.subscribe(params => {
       this.authService.updateUserUsername(username, this.id)
       .subscribe(res => {
        console.log('Added');
        this.authService
        .getUsers(this.id)
        .subscribe((data: User[]) => {
          this.userDetails = data;
          console.log(this.userDetails);
      });
      });
    });
}
updateUser1( password) {
  this.route.params.subscribe(params => {
     this.authService.updateUserPassword( password, this.id)
     .subscribe(res => {
      console.log('Added');
      this.authService
      .getUsers(this.id)
      .subscribe((data: User[]) => {
        this.userDetails = data;
        console.log(this.userDetails);
    });
    });
  });
}

}
