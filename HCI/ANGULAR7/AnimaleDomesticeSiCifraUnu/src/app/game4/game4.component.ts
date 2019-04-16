import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CODITE } from '../model/coada.source';
import { ANIMALS4 } from '../model/game4.source';

@Component({
  selector: 'app-game4',
  templateUrl: './game4.component.html',
  styleUrls: ['./game4.component.scss']
})
export class Game4Component implements OnInit {

  animals4=ANIMALS4
  codite=CODITE
   ok:number=0

  
  
  constructor(private router:Router) {
   
   }

  ngOnInit() {
  }

  CheckWin()
  {
   this.ok+=1;
    
    if (this.ok == 3)
    { 
      let audio=new Audio("../../assets/audios/Bravo.mp3");
      audio.play();
      setTimeout(()=>{
        this.router.navigate(['../games']);},5000);
  
      
    }
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
 


  dropVaca(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   
    if(data=="coditaVaca")
    { this.CheckWin();
    ev.target.appendChild(document.getElementById(data));}
    else{
      let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
      audio.play();
    }
   
  }
  dropPorc(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
  console.log(data);
    if(data=="coditaPorc")
    {ev.target.appendChild(document.getElementById(data));
      this.CheckWin();}
    else{
      let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
      audio.play();
    }
    
  }
  dropPisica(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    if(data=="coditaPisica")
    {
    ev.target.appendChild(document.getElementById(data));
    this.CheckWin();}
    else {let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
    audio.play();}
    
  }
}

