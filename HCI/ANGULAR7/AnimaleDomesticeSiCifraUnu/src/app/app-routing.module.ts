import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'home',
    component: AnimalComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/game1', component: Game1Component },
  { path: 'games/game2', component: Game2Component },
  { path: 'games/game3', component: Game3Component },
  { path: 'games/game4', component: Game4Component },
  { path: 'games/game5', component: Game5Component },
  { path: 'games/game6', component: Game6Component },
  { path: 'games/game7', component: Game7Component },
  { path: 'games/game8', component: Game8Component },
  { path: 'games/game9', component: Game9Component },
  { path: 'games/game10', component: Game10Component },
  { path: 'games/game11', component: Game11Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
