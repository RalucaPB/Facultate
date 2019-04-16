import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMALS7 } from '../model/game7.source';

@Component({
  selector: 'app-game7',
  templateUrl: './game7.component.html',
  styleUrls: ['./game7.component.scss']
})
export class Game7Component implements OnInit {

  animals7=ANIMALS7
  ok:number=0

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  
  verify1(event: any){
    console.log(event.target.value)
    if(event.target.value !="1")
    {
      let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
      audio.play();
      setTimeout(()=>{
        event.target.value = "";},3000);
  
      
   
    }
    else{
      let audio=new Audio("../../assets/audios/Bravo.mp3");
      audio.play();
      setTimeout(()=>{
        this.router.navigate(['../games']);},5000);
    }


  }
}

