import { Component, OnInit } from '@angular/core';
import { ANIMALS11 } from '../model/game11.source';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-game11',
  templateUrl: './game11.component.html',
  styleUrls: ['./game11.component.scss']
})
export class Game11Component implements OnInit {
  animals11=ANIMALS11
  constructor( private router:Router) { }

  ngOnInit() {
  }

  onSelect(a: Animal): void {
    let audio=new Audio(a.audioPath);
    console.log(audio);
    audio.play();
    if(a.id=="gaina")
    setTimeout(()=>{
      this.router.navigate(['../games']);},5000);

    }


}

