import { Component, OnInit } from '@angular/core';
import Entity from 'src/app/models/entity';
import { Router } from '@angular/router';
import { EntityServiceService } from 'src/app/services/entity-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set-sd3game1',
  templateUrl: './set-sd3game1.component.html',
  styleUrls: ['./set-sd3game1.component.scss']
})
export class SetSD3game1Component implements OnInit {

  stars:Entity[];
  exercises:Exercise;
  ok:number=0;
  okA:number=1;
  audioC:any;
  audioB:any;
  audioI:any;

  constructor(private router:Router,private entityService:EntityServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.entityService
      .getEntities("ssd3g1")
      .subscribe((data: Entity[]) => {
        this.stars = data;
        console.log(this.stars);
    });
    this.exerciseService
    .getExercises("ssd3g1")
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
  verify1(event: any){
    console.log(event.target.value)
    if(event.target.value !="6")
    {
       this.audioI=new Audio("../../../../assets/audios/MaiIncearca.m4a");
      if(this.okA==0){
        this.audioI.play();
        this.okA=1;
        }
      setTimeout(()=>{
        this.okA=0;
        event.target.value = "";},3000);
        
      
   
    }
    else{
      this.audioB=new Audio("../../../assets/audios/Bravo.m4a");
      if(this.okA==0){
        this.audioB.play();
        this.okA=1;
        }
      setTimeout(()=>{
        
        this.router.navigate(['/main/homeSindromDown/sets/set3game2']);},3000);
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
