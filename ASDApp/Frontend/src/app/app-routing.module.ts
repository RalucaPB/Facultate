import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HomeAutismComponent } from './autism/home-autism/home-autism.component';
import { MainComponent } from './mainApp/main/main.component';
import { SetsAutismComponent } from './autism/setsAutism/sets-autism/sets-autism.component';
import { Set1game1Component } from './autism/setsAutism/set1game1/set1game1.component';
import { Set1game2Component } from './autism/setsAutism/set1game2/set1game2.component';
import { Set2game1Component } from './autism/setsAutism/set2game1/set2game1.component';
import { Set2game4Component } from './autism/setsAutism/set2game4/set2game4.component';
import { Set2game3Component } from './autism/setsAutism/set2game3/set2game3.component';
import { Set2game2Component } from './autism/setsAutism/set2game2/set2game2.component';
import { Set2game5Component } from './autism/setsAutism/set2game5/set2game5.component';
import { Set3game1Component } from './autism/setsAutism/set3game1/set3game1.component';
import { Set3game2Component } from './autism/setsAutism/set3game2/set3game2.component';
import { Set3game3Component } from './autism/setsAutism/set3game3/set3game3.component';
import { Set3game4Component } from './autism/setsAutism/set3game4/set3game4.component';
import { Set3game5Component } from './autism/setsAutism/set3game5/set3game5.component';
import { Set4game1Component } from './autism/setsAutism/set4game1/set4game1.component';
import { Set4game2Component } from './autism/setsAutism/set4game2/set4game2.component';
import { Set4game3Component } from './autism/setsAutism/set4game3/set4game3.component';
import { Set4game4Component } from './autism/setsAutism/set4game4/set4game4.component';
import { Set4game5Component } from './autism/setsAutism/set4game5/set4game5.component';
import { Set5game1Component } from './autism/setsAutism/set5game1/set5game1.component';
import { Set5game2Component } from './autism/setsAutism/set5game2/set5game2.component';
import { Set5game3Component } from './autism/setsAutism/set5game3/set5game3.component';
import { Set5game4Component } from './autism/setsAutism/set5game4/set5game4.component';
import { HomeSindromDownComponent } from './sindrom-down/home-sindrom-down/home-sindrom-down.component';
import { SetsSindromDownComponent } from './sindrom-down/setsSindromDown/sets-sindrom-down/sets-sindrom-down.component';
import { SetSD1game1Component } from './sindrom-down/setsSindromDown/set-sd1game1/set-sd1game1.component';
import { SetSD2game1Component } from './sindrom-down/setsSindromDown/set-sd2game1/set-sd2game1.component';
import { SetSD3game1Component } from './sindrom-down/setsSindromDown/set-sd3game1/set-sd3game1.component';
import { SetSD4game1Component } from './sindrom-down/setsSindromDown/set-sd4game1/set-sd4game1.component';
import { SetSD5game1Component } from './sindrom-down/setsSindromDown/set-sd5game1/set-sd5game1.component';
import { Set5game5Component } from './autism/setsAutism/set5game5/set5game5.component';
import { SetSd1game2Component } from './sindrom-down/setsSindromDown/set-sd1game2/set-sd1game2.component';
import { SetSd2game2Component } from './sindrom-down/setsSindromDown/set-sd2game2/set-sd2game2.component';
import { SetSd3game2Component } from './sindrom-down/setsSindromDown/set-sd3game2/set-sd3game2.component';
import { SetSd4game2Component } from './sindrom-down/setsSindromDown/set-sd4game2/set-sd4game2.component';
import { AgendaComponent } from './autism/agenda/agenda.component';
import { StoryComponent } from './sindrom-down/story/story.component';
import { Set6game1Component } from './autism/setsAutism/set6game1/set6game1.component';
import { Set7game1Component } from './autism/setsAutism/set7game1/set7game1.component';
import { Set8game1Component } from './autism/setsAutism/set8game1/set8game1.component';
import { SetSd6game1Component } from './sindrom-down/setsSindromDown/set-sd6game1/set-sd6game1.component';
import { SetSd7game1Component } from './sindrom-down/setsSindromDown/set-sd7game1/set-sd7game1.component';
import { SetSd8game1Component } from './sindrom-down/setsSindromDown/set-sd8game1/set-sd8game1.component';
import { UpdateUserComponent } from './auth/update-user/update-user.component';
import { Set8game2Component } from './autism/setsAutism/set8game2/set8game2.component';
import { Set7game2Component } from './autism/setsAutism/set7game2/set7game2.component';
import { Set6game2Component } from './autism/setsAutism/set6game2/set6game2.component';
import { SetSd5game2Component } from './sindrom-down/setsSindromDown/set-sd5game2/set-sd5game2.component';
import { SetSd6game2Component } from './sindrom-down/setsSindromDown/set-sd6game2/set-sd6game2.component';
import { SetSd7game2Component } from './sindrom-down/setsSindromDown/set-sd7game2/set-sd7game2.component';
import { SetSd8game2Component } from './sindrom-down/setsSindromDown/set-sd8game2/set-sd8game2.component';


const routes: Routes = [
 
  {
    path: 'main',
    component: MainComponent
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  //{path:'',redirectTo:'/main',pathMatch:'full'},
  //{path:'main',loadChildren:'./auth/auth.module#AuthModule'}
  {path:'main/login',component:LoginComponent},
  {path:'main/register',component:RegisterComponent},
  {path:'main/homeAutism',component:HomeAutismComponent},
  {path:'main/homeSindromDown',component:HomeSindromDownComponent},
  {path:'main/homeAutism/sets',component:SetsAutismComponent},
  {path:'main/homeAutism/agenda',component:AgendaComponent},
  {path:'main/homeAutism/update',component:UpdateUserComponent},
  {path:'main/homeAutism/sets/set1game1',component:Set1game1Component},
  {path:'main/homeAutism/sets/set1game2',component:Set1game2Component},
  {path:"main/homeAutism/sets/set2game1",component:Set2game1Component},
  {path:"main/homeAutism/sets/set2game2",component:Set2game2Component},
  {path:"main/homeAutism/sets/set2game3",component:Set2game3Component},
  {path:"main/homeAutism/sets/set2game4",component:Set2game4Component},
  {path:"main/homeAutism/sets/set2game5",component:Set2game5Component},
  {path:"main/homeAutism/sets/set3game1",component:Set3game1Component},
  {path:"main/homeAutism/sets/set3game2",component:Set3game2Component},
  {path:"main/homeAutism/sets/set3game3",component:Set3game3Component},
  {path:"main/homeAutism/sets/set3game4",component:Set3game4Component},
  {path:"main/homeAutism/sets/set3game5",component:Set3game5Component},
  {path:"main/homeAutism/sets/set4game1",component:Set4game1Component},
  {path:"main/homeAutism/sets/set4game2",component:Set4game2Component},
  {path:"main/homeAutism/sets/set4game3",component:Set4game3Component},
  {path:"main/homeAutism/sets/set4game4",component:Set4game4Component},
  {path:"main/homeAutism/sets/set4game5",component:Set4game5Component}, 
  {path:"main/homeAutism/sets/set5game1",component:Set5game1Component},
  {path:"main/homeAutism/sets/set5game2",component:Set5game2Component},
  {path:"main/homeAutism/sets/set5game3",component:Set5game3Component},
  {path:"main/homeAutism/sets/set5game4",component:Set5game4Component},
  {path:"main/homeAutism/sets/set5game5",component:Set5game5Component},
  {path:"main/homeAutism/sets/set6game1",component:Set6game1Component},
  {path:"main/homeAutism/sets/set6game2",component:Set6game2Component},
  {path:"main/homeAutism/sets/set7game1",component:Set7game1Component},
  {path:"main/homeAutism/sets/set7game2",component:Set7game2Component},
  {path:"main/homeAutism/sets/set8game1",component:Set8game1Component},
  {path:"main/homeAutism/sets/set8game2",component:Set8game2Component},
  {path:"main/homeSindromDown/sets",component:SetsSindromDownComponent},
  {path:"main/homeSindromDown/story",component:StoryComponent},
  {path:"main/homeSindromDown/sets/set1game1",component:SetSD1game1Component},
  {path:"main/homeSindromDown/sets/set1game2",component:SetSd1game2Component},
  {path:"main/homeSindromDown/sets/set2game1",component:SetSD2game1Component},
  {path:"main/homeSindromDown/sets/set2game2",component:SetSd2game2Component},
  {path:"main/homeSindromDown/sets/set3game1",component:SetSD3game1Component},
  {path:"main/homeSindromDown/sets/set3game2",component:SetSd3game2Component},
  {path:"main/homeSindromDown/sets/set4game1",component:SetSD4game1Component},
  {path:"main/homeSindromDown/sets/set4game2",component:SetSd4game2Component},
  {path:"main/homeSindromDown/sets/set5game1",component:SetSD5game1Component},
  {path:"main/homeSindromDown/sets/set5game2",component:SetSd5game2Component},
  {path:"main/homeSindromDown/sets/set6game1",component:SetSd6game1Component},
  {path:"main/homeSindromDown/sets/set6game2",component:SetSd6game2Component},
  {path:"main/homeSindromDown/sets/set7game1",component:SetSd7game1Component},
  {path:"main/homeSindromDown/sets/set7game2",component:SetSd7game2Component},
  {path:"main/homeSindromDown/sets/set8game1",component:SetSd8game1Component},
  {path:"main/homeSindromDown/sets/set8game2",component:SetSd8game2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
