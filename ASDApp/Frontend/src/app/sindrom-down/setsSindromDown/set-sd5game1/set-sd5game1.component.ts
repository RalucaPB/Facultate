import { Component, OnInit } from '@angular/core';
import Entity from 'src/app/models/entity';
import { Router } from '@angular/router';
import { EntityServiceService } from 'src/app/services/entity-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set-sd5game1',
  templateUrl: './set-sd5game1.component.html',
  styleUrls: ['./set-sd5game1.component.scss']
})
export class SetSD5game1Component implements OnInit {

  animals:Entity[];
  exercises:Exercise;
  okA:number=1;
  audioC:any;
  audio:any;

  

  constructor(private router:Router,private entityService:EntityServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.entityService
      .getEntities("ssd5g1")
      .subscribe((data: Entity[]) => {
        this.animals = data;
        console.log(this.animals);
    });
    this.exerciseService
    .getExercises("ssd5g1")
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
  onSelect(a: Entity): void {
    this.audio=new Audio(a.audioPath);
    console.log(this.audio);
    if(this.okA==0){
    this.audio.play();
    this.okA=1;
    }
    setTimeout(()=>{
      this.okA=0;
      },2000);
    if(a.idEntity=="gresit1")
    setTimeout(()=>{
      this.router.navigate(['/main/homeSindromDown/sets/set5game2']);},3000);

    }
    ngOnDestroy() {
      // destroy audio here
      if(this.audioC) {
        this.audioC.pause();
        this.audioC = null;
      }
      if(this.audio) {
        this.audio.pause();
        this.audio = null;
      }
    
    }
}