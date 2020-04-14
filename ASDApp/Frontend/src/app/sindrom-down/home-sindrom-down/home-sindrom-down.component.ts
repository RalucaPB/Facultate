import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-sindrom-down',
  templateUrl: './home-sindrom-down.component.html',
  styleUrls: ['./home-sindrom-down.component.scss']
})
export class HomeSindromDownComponent implements OnInit {


  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/main");

  }
}
