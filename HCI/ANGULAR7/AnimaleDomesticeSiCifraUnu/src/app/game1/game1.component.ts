import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';
import { Router } from '@angular/router';
import { ANIMALS1 } from '../model/game1.source';
import { FOLOS1 } from '../model/folos.source';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit {

  animal1=ANIMALS1;
  folos1=FOLOS1;
  lastSelected: Animal = null;
  gainaDone: boolean = false;
  vacaDone: boolean = false;
  porcDone: boolean = false;
  ok:number=0;
 
  constructor(private router:Router){
     
  }

  ngOnInit(){
      
  }
  CheckWin()
  {
   this.ok+=1;
    
    if (this.ok == 3)
    { 
      let audio=new Audio("../../assets/audios/Bravo.mp3");
      audio.play();
      this.animal1.forEach(contact => {
        contact.id=contact.id.replace("transparent","");
      });
      this.folos1.forEach(contact => {
        contact.id=contact.id.replace("transparent","");
      });
      setTimeout(()=>{
        this.router.navigate(['../games']);},5000);
      
  
      
    }
  }
  onSelect(a: Animal): void {
      if (a.id == "gaina1transparent" || a.id == "gaina2transparent" || a.id == "porc1transparent" || a.id == "porc2transparent" || a.id == "vaca1transparent" || a.id == "vaca2transparent") 
      { 
          //daca animalutul a fost deja reunit cu puiul/mama, nu se intampla nimic
      }   //daca nu, se verifica
      else
      if (this.lastSelected == null){
          //daca nu e selectat nimic, e marcat animalul curent ca selectie
          this.lastSelected = a;
        //  let audio = new Audio('../../assets/audios/MaiIncearca.mp3');
         // console.log(audio);
         // audio.play();
      } else {
          //daca exista animal selectat, se verifica daca e pereche cu animalul curent
          //daca se gaseste o pereche, se executa fucntia correct, se demarcheaza selectia si se seteaza perechea ca fiind gasita
          if ((this.lastSelected.id == "gaina1" && a.id == "gaina2")||(this.lastSelected.id == "gaina2" && a.id == "gaina1") ) {
              this.correct(a, this.lastSelected);
              this.lastSelected = null;
              this.gainaDone = true;
              let image=new Image();
              image.src="../../assets/images/unu.png";
              image.id="unu2";
             document.getElementById("unu1").appendChild(image);
             setTimeout(()=>{
             document.getElementById("unu1").removeChild(image);},4000);
             console.log(document.getElementById("unu1"));

              this.CheckWin();
          }/* else
          if (this.lastSelected.id == "gaina2" && a.id == "gaina1") {
              this.correct(a, this.lastSelected);
              this.lastSelected = null;
              this.gainaDone = true;
          } */else 
          if ((this.lastSelected.id == "porc1" && a.id == "porc2")||(this.lastSelected.id == "porc2" && a.id == "porc1")) {
              this.correct(a, this.lastSelected);
              this.lastSelected = null;
              this.porcDone = true;
              let image=new Image();
              image.src="../../assets/images/unu.png";
              image.id="unu2";
             document.getElementById("unu1").appendChild(image);
             setTimeout(()=>{
             document.getElementById("unu1").removeChild(image);},4000);
             console.log(document.getElementById("unu1"));
              this.CheckWin();
          } /*else
          if (this.lastSelected.id == "porc2" && a.id == "porc1") {
              this.correct(a, this.lastSelected);
              this.lastSelected = null;
              this.porcDone = true;
          }*/ else 
          if ((this.lastSelected.id == "vaca1" && a.id == "vaca2")||(this.lastSelected.id == "vaca2" && a.id == "vaca1")) {
              this.correct(a, this.lastSelected);
              this.lastSelected = null;
              this.vacaDone = true;
              let image=new Image();
              image.src="../../assets/images/unu.png";
              image.id="unu2";
             document.getElementById("unu1").appendChild(image);
             setTimeout(()=>{
             document.getElementById("unu1").removeChild(image);},4000);
             console.log(document.getElementById("unu1"));
              this.CheckWin();
          } /*else 
          if (this.lastSelected.id == "vaca2" && a.id == "vaca1") {
              this.correct(a, this.lastSelected);
              this.lastSelected = null;
              this.vacaDone = true;
          }*/ else
          {
              //daca selectia si animalul curent nu sunt pereche, se deselecteaza selectia
              this.lastSelected = null;
              let audio = new Audio('../../assets/audios/MaiIncearca.mp3');
              console.log(audio);
              audio.play();
          }
      }
  }
  correct(a: Animal,b: Animal): void{
      //cele doua animale sunt facute transparent (se adauga "transparent" la id pt. folosirea css-ului transparent)
      a.id = a.id + "transparent";
      b.id = b.id + "transparent";
      //let audio = new Audio('../../assets/audios/correct.wav');
      //console.log(audio);
     // audio.play();
  }
 
}
