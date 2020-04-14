import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-autism',
  templateUrl: './home-autism.component.html',
  styleUrls: ['./home-autism.component.scss']
})
export class HomeAutismComponent implements OnInit {

  
  constructor(private authService: AuthService,private router: Router) {

   }

  ngOnInit() {
   
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/main");

  }
}
