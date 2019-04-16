import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { GamesComponent } from './games/games.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { Game4Component } from './game4/game4.component';
import { Game5Component } from './game5/game5.component';
import { Game6Component } from './game6/game6.component';
import { Game7Component } from './game7/game7.component';
import { Game8Component } from './game8/game8.component';
import { Game9Component } from './game9/game9.component';
import { Game10Component } from './game10/game10.component';
import { Game11Component } from './game11/game11.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    GamesComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    Game6Component,
    Game7Component,
    Game8Component,
    Game9Component,
    Game10Component,
    Game11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
