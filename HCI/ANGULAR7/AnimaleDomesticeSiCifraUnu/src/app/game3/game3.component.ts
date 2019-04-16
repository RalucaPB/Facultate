import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MANCARE } from '../model/mancare.source';
import { ANIMALS3 } from '../model/game3.source';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.scss']
})
export class Game3Component implements OnInit {

  animals3=ANIMALS3;
  mancare=MANCARE;
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
 


  dropCaine(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   
    if(data=="os")
    { this.CheckWin();
    ev.target.appendChild(document.getElementById(data));}
    else{
      let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
      audio.play();
    
    }
   
  }
  dropRata(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(data=="cucuruz")
    {ev.target.appendChild(document.getElementById(data));
      this.CheckWin();}
    else{
      let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
      audio.play();
    }
    
  }
  dropIepure(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    if(data=="morcov")
    {
    ev.target.appendChild(document.getElementById(data));
    this.CheckWin();}
    else {let audio=new Audio("../../assets/audios/MaiIncearca.mp3");
    audio.play();}
    
  }
}
