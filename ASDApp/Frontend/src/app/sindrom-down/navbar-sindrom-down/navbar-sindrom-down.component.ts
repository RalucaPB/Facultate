import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-sindrom-down',
  templateUrl: './navbar-sindrom-down.component.html',
  styleUrls: ['./navbar-sindrom-down.component.scss']
})
export class NavbarSindromDownComponent implements OnInit {

  accessToken:string;
  constructor(private authService: AuthService,private router: Router) {    this.accessToken=authService.getToken(); }

  ngOnInit() {
    if(!this.accessToken)
    this.router.navigateByUrl("/main/login");
  }
  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/main");

  }
}
