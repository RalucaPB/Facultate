import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { SetsAutismComponent } from './autism/setsAutism/sets-autism/sets-autism.component';
import { NavBarMainComponent } from './mainApp/nav-bar-main/nav-bar-main.component';
import { HomeAutismComponent } from './autism/home-autism/home-autism.component';
import { MainComponent } from './mainApp/main/main.component';
import { NavbarAutismComponent } from './autism/navbar-autism/navbar-autism.component';
import { Set1game1Component } from './autism/setsAutism/set1game1/set1game1.component';
import { Set1game2Component } from './autism/setsAutism/set1game2/set1game2.component';
import { EntityServiceService } from './services/entity-service.service';
import { Set2game1Component } from './autism/setsAutism/set2game1/set2game1.component';
import { Set2game2Component } from './autism/setsAutism/set2game2/set2game2.component';
import { Set2game3Component } from './autism/setsAutism/set2game3/set2game3.component';
import { Set2game4Component } from './autism/setsAutism/set2game4/set2game4.component';
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
import { Set5game5Component } from './autism/setsAutism/set5game5/set5game5.component';
import { HomeSindromDownComponent } from './sindrom-down/home-sindrom-down/home-sindrom-down.component';
import { NavbarSindromDownComponent } from './sindrom-down/navbar-sindrom-down/navbar-sindrom-down.component';
import { SetsSindromDownComponent } from './sindrom-down/setsSindromDown/sets-sindrom-down/sets-sindrom-down.component';
import { SetSD1game1Component } from './sindrom-down/setsSindromDown/set-sd1game1/set-sd1game1.component';
import { SetSD2game1Component } from './sindrom-down/setsSindromDown/set-sd2game1/set-sd2game1.component';
import { SetSD3game1Component } from './sindrom-down/setsSindromDown/set-sd3game1/set-sd3game1.component';
import { SetSD4game1Component } from './sindrom-down/setsSindromDown/set-sd4game1/set-sd4game1.component';
import { SetSD5game1Component } from './sindrom-down/setsSindromDown/set-sd5game1/set-sd5game1.component';
import { SetSd2game2Component } from './sindrom-down/setsSindromDown/set-sd2game2/set-sd2game2.component';
import { SetSd3game2Component } from './sindrom-down/setsSindromDown/set-sd3game2/set-sd3game2.component';
import { SetSd4game2Component } from './sindrom-down/setsSindromDown/set-sd4game2/set-sd4game2.component';
import { SetSd1game2Component } from './sindrom-down/setsSindromDown/set-sd1game2/set-sd1game2.component';
import { AgendaComponent } from './autism/agenda/agenda.component';
import { AgendaService } from './services/agenda.service';
import { StoryComponent } from './sindrom-down/story/story.component';
import { Set6game1Component } from './autism/setsAutism/set6game1/set6game1.component';
import { Set7game1Component } from './autism/setsAutism/set7game1/set7game1.component';
import { Set8game1Component } from './autism/setsAutism/set8game1/set8game1.component';
import { SetSd6game1Component } from './sindrom-down/setsSindromDown/set-sd6game1/set-sd6game1.component';
import { SetSd7game1Component } from './sindrom-down/setsSindromDown/set-sd7game1/set-sd7game1.component';
import { SetSd8game1Component } from './sindrom-down/setsSindromDown/set-sd8game1/set-sd8game1.component';
import { PolygonServiceService } from './services/polygon-service.service';
import { RectServiceService } from './services/rect-service.service';
import { ExerciseServiceService } from './services/exercise-service.service';
import { UpdateUserComponent } from './auth/update-user/update-user.component';
import { Set6game2Component } from './autism/setsAutism/set6game2/set6game2.component';
import { Set7game2Component } from './autism/setsAutism/set7game2/set7game2.component';
import { Set8game2Component } from './autism/setsAutism/set8game2/set8game2.component';
import { SetSd5game2Component } from './sindrom-down/setsSindromDown/set-sd5game2/set-sd5game2.component';
import { SetSd6game2Component } from './sindrom-down/setsSindromDown/set-sd6game2/set-sd6game2.component';
import { SetSd7game2Component } from './sindrom-down/setsSindromDown/set-sd7game2/set-sd7game2.component';
import { SetSd8game2Component } from './sindrom-down/setsSindromDown/set-sd8game2/set-sd8game2.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    HomeAutismComponent,
    HomeSindromDownComponent,
    SetsAutismComponent,
    NavBarMainComponent,
    NavbarAutismComponent,
    Set1game1Component,
    Set1game2Component,
    Set2game1Component,
    Set2game2Component,
    Set2game3Component,
    Set2game4Component,
    Set2game5Component,
    Set3game1Component,
    Set3game2Component,
    Set3game3Component,
    Set3game4Component,
    Set3game5Component,
    Set4game1Component,
    Set4game2Component,
    Set4game3Component,
    Set4game4Component,
    Set4game5Component,
    Set5game1Component,
    Set5game2Component,
    Set5game3Component,
    Set5game4Component,
    Set5game5Component,
    NavbarSindromDownComponent,
    SetsSindromDownComponent,
    SetSD1game1Component,
    SetSD2game1Component,
    SetSD3game1Component,
    SetSD4game1Component,
    SetSD5game1Component,
    SetSd1game2Component,
    SetSd2game2Component,
    SetSd3game2Component,
    SetSd4game2Component,
    AgendaComponent,
    StoryComponent,
    Set6game1Component,
    Set7game1Component,
    Set8game1Component,
    SetSd6game1Component,
    SetSd7game1Component,
    SetSd8game1Component,
    UpdateUserComponent,
    Set6game2Component,
    Set7game2Component,
    Set8game2Component,
    SetSd5game2Component,
    SetSd6game2Component,
    SetSd7game2Component,
    SetSd8game2Component,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [AuthService,EntityServiceService,AgendaService,FormBuilder,PolygonServiceService,RectServiceService,ExerciseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
