import { Component, OnInit } from '@angular/core';
import Entity from 'src/app/models/entity';
import { Router } from '@angular/router';
import { EntityServiceService } from 'src/app/services/entity-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set1game2',
  templateUrl: './set1game2.component.html',
  styleUrls: ['./set1game2.component.scss']
})
export class Set1game2Component implements OnInit {

  foods:Entity[]
  letters:Entity[]
  ok:number=0
  exercises:Exercise
  okA:number=1
  audioC:any;
  audioB:any;
  audioI:any;
  
  constructor(private router:Router,private entityService:EntityServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.entityService
      .getEntities("s1g2e1")
      .subscribe((data: Entity[]) => {
        this.foods = data;
        console.log(this.foods);
    });
    this.entityService
    .getEntities("s1g2e2")
    .subscribe((data: Entity[]) => {
      this.letters = data;
      console.log(this.letters);
  });
  this.exerciseService
  .getExercises("s1g2")
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
    
    if (this.ok == 3)
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
 


  dropC(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   
    if(data=="lca")
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
  dropO(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
  console.log(data);
    if(data=="lo")
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
  dropL(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    if(data=="ll")
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
