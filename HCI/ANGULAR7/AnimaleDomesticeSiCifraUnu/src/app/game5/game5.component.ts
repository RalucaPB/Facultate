import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMALS5 } from '../model/game5.source';

@Component({
  selector: 'app-game5',
  templateUrl: './game5.component.html',
  styleUrls: ['./game5.component.scss']
})
export class Game5Component implements OnInit {

  animals5=ANIMALS5
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
        
        this.router.navigate(['../games/game6']);},5000);
    }


  }
}

