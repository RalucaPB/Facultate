import { Component, OnInit } from '@angular/core';
import { ANIMALS8 } from '../model/game8.source';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-game8',
  templateUrl: './game8.component.html',
  styleUrls: ['./game8.component.scss']
})
export class Game8Component implements OnInit {

  animals8=ANIMALS8
 
  constructor( private router:Router) { }

  ngOnInit() {
  }

  onSelect(a: Animal): void {
    let audio=new Audio(a.audioPath);
    console.log(audio);
    audio.play();
    if(a.id=="porc")
    setTimeout(()=>{
      this.router.navigate(['../games/game9']);},5000);

    }
}
