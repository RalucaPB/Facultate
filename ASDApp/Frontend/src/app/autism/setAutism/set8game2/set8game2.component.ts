import { Component, OnInit } from '@angular/core';
import Entity from 'src/app/models/entity';
import { Router } from '@angular/router';
import { EntityServiceService } from 'src/app/services/entity-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set8game2',
  templateUrl: './set8game2.component.html',
  styleUrls: ['./set8game2.component.scss']
})
export class Set8game2Component implements OnInit {

  objects:Entity[]
  exercises:Exercise
  categorias:Entity[]
  ok:number=0
  okA:number=1
  audioC:any;
  audioB:any;
  audioI:any;

  constructor(private router:Router,private entityService:EntityServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.entityService
    .getEntities("s8g2e1")
    .subscribe((data: Entity[]) => {
      this.categorias = data;
      console.log(this.categorias);
  });
 
    this.entityService
    .getEntities("s8g2e2")
    .subscribe((data: Entity[]) => {
      this.objects = data;
      console.log(this.objects);
  });
  this.exerciseService
  .getExercises("s8g2")
  .subscribe((data: Exercise) => {
    this.exercises = data;
    console.log(this.exercises);
});
this.exerciseService
.getExercises("s8g2")
.subscribe((data: Exercise) => {
  this.exercises = data;
  console.log(this.exercises);
  this.audioC=new Audio(this.exercises[0].audioPath);

  this.audioC.play();
  setTimeout(()=>{
    this.okA=0;
    
   }, 3000);
});
    
  }
  CheckWin()
  {
   this.ok+=1;
    
    if (this.ok == 4)
    { 
     
      this.audioB=new Audio("../../../../assets/audios/Bravo.m4a");
      this.audioB.play();
      this.okA=1;
      setTimeout(()=>{
        this.router.navigate(['/main/homeAutism/sets']);},3000);
  
      
    }
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
 


  dropL(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   
    if(data=="lg1" || data=="lg2")
    {if(this.okA==0){ev.target.appendChild(document.getElementById(data));
      this.CheckWin();}
      }
    else{
      if(this.okA==0){
      this.audioI=new Audio("../../assets/audios/MaiIncearca.m4a");
      this.audioI.play();
      this.okA=1;
      setTimeout(()=>{
        this.okA=0;
        
       }, 2000);
      }
    }
   
  }
  dropF(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
  console.log(data);
    if(data=="fr1" || data=="fr2")
    {if(this.okA==0){ev.target.appendChild(document.getElementById(data));
      this.CheckWin();}
      }
    else{
      if(this.okA==0){
      this.audioI=new Audio("../../assets/audios/MaiIncearca.m4a");
      this.audioI.play();
      this.okA=1;
      setTimeout(()=>{
        this.okA=0;
        
       }, 2000);
      }
    }
   
  }

  ngOnDestroy() {
    // destroy audio here
    if(this.audioC) {
      this.audioC.pause();
      this.audioC = null;
    }
    if(this.audioB) {
      this.audioB.pause();
      this.audioB = null;
    }
   
    if(this.audioI) {
      this.audioI.pause();
      this.audioI = null;
    }
  
  }
}
