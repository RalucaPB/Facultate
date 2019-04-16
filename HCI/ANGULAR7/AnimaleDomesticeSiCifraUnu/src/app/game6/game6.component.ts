import { Component, OnInit } from '@angular/core';
import { ANIMALS6 } from '../model/game6.source';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game6',
  templateUrl: './game6.component.html',
  styleUrls: ['./game6.component.scss']
})
export class Game6Component implements OnInit {

  animals6=ANIMALS6
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
        this.router.navigate(['../games/game7']);},5000);
    }


  }
}
