import { Component, OnInit } from '@angular/core';
import { ANIMALS9 } from '../model/game9.source';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-game9',
  templateUrl: './game9.component.html',
  styleUrls: ['./game9.component.scss']
})
export class Game9Component implements OnInit {

  animals9=ANIMALS9
 
  constructor( private router:Router) { }

  ngOnInit() {
  }

  onSelect(a: Animal): void {
    let audio=new Audio(a.audioPath);
    console.log(audio);
    audio.play();
    if(a.id=="pisica")
    setTimeout(()=>{
      this.router.navigate(['../games/game10']);},5000);

    }
}

