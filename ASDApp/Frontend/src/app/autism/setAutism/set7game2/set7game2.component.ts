import { Component, OnInit } from '@angular/core';
import Exercise from 'src/app/models/exercise';
import Entity from 'src/app/models/entity';
import { Router } from '@angular/router';
import { EntityServiceService } from 'src/app/services/entity-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';

@Component({
  selector: 'app-set7game2',
  templateUrl: './set7game2.component.html',
  styleUrls: ['./set7game2.component.scss']
})
export class Set7game2Component implements OnInit {

  stars:Entity[]
  exercises:Exercise
  ok:number=0
  okA:number=1
  audioC:any;
  audioB:any;
  audioI:any;

  constructor(private router:Router,private entityService:EntityServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
 
    this.entityService
    .getEntities("s7g2")
    .subscribe((data: Entity[]) => {
      this.stars = data;
      console.log(this.stars);
  });
  this.exerciseService
  .getExercises("s1g1")
  .subscribe((data: Exercise) => {
    this.exercises = data;
    console.log(this.exercises);
});
this.exerciseService
.getExercises("s7g2")
.subscribe((data: Exercise) => {
  this.exercises = data;
  console.log(this.exercises);
  this.audioC=new Audio(this.exercises[0].audioPath);

  this.audioC.play();
  setTimeout(()=>{
    this.okA=0;
    
   }, 4000);
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
 


  dropV(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   
    if(data=="v1" || data=="v2")
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
  dropG(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
  console.log(data);
    if(data=="g1" || data=="g2")
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

