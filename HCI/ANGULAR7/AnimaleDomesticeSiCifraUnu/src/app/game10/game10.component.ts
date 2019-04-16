import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';
import { ANIMALS10 } from '../model/game10.source';

@Component({
  selector: 'app-game10',
  templateUrl: './game10.component.html',
  styleUrls: ['./game10.component.scss']
})
export class Game10Component implements OnInit {

  animals10=ANIMALS10
  constructor( private router:Router) { }

  ngOnInit() {
  }

  onSelect(a: Animal): void {
    let audio=new Audio(a.audioPath);
    console.log(audio);
    audio.play();
    if(a.id=="caine")
    setTimeout(()=>{
      this.router.navigate(['../games/game11']);},5000);

    }

}
