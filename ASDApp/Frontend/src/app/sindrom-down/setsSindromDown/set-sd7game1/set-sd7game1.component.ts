import { Component, OnInit } from '@angular/core';
import Circle from 'src/app/models/circle';
import { Router } from '@angular/router';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import { EntityServiceService } from 'src/app/services/entity-service.service';
import Entity from 'src/app/models/entity';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set-sd7game1',
  templateUrl: './set-sd7game1.component.html',
  styleUrls: ['./set-sd7game1.component.scss']
})
export class SetSd7game1Component implements OnInit {

  circles:Circle[];
  ok:number=0;
  color:string;
  animals:Entity[];
  exercises:Exercise;
  okA:number=1;
  audioC:any;
  audioB:any;
  audioI:any;
  audioS:any;

  constructor(private router:Router,private svgService:SvgServiceService,private entityService:EntityServiceService,private exerciseService:ExerciseServiceService) {
    this.color="white";
   }
 
  ngOnInit() {
    this.svgService
      .getSvgs("ssd7g1")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.entityService
    .getEntities("ssd7g1Color")
    .subscribe((data: Entity[]) => {
      this.animals = data;
      console.log(this.animals);
  });
  this.exerciseService
  .getExercises("ssd7g1")
  .subscribe((data: Exercise) => {
    this.exercises = data;
    console.log(this.exercises);
    this.audioC=new Audio(this.exercises[0].audioPath);

    this.audioC.play();
    setTimeout(()=>{
      this.okA=0;
      
     }, 7000);
});
  }

  CheckWin()
  {
   this.ok+=1;
    
    if (this.ok == 5)
    { 
      this.audioB=new Audio("../../../../assets/audios/Bravo.m4a");
      this.audioB.play();
     this.okA=1;
      setTimeout(()=>{
        this.circles.forEach(function (value) {
          value.fill="white";
        });
        this.router.navigate(['/main/homeSindromDown/sets/set7game2']);
       
      },3000);
  
      
    }
  }
 
  onSelectC(c:Entity): void {

    this.color=c.idEntity;
  }
  onSelect(a: Circle): void {
    if(a.class=="st0" && this.color=="red" && a.fill=="white")
    {
      if(this.okA==0){
      a.fill=this.color;
      a.class="st1";
      
        this.CheckWin(); 
        //this.okA=1;

      }
      
    }
    else if(this.color=="white") { this.audioS=new Audio("../../../../assets/audios/SelectareCuloare.m4a");
    if(this.okA==0){
    this.audioS.play();
    setTimeout(()=>{
      this.okA=0;
      },7000);
    }
    
    }
    else{
      this.audioI=new Audio("../../../../assets/audios/MaiIncearca.m4a");
      if(this.okA==0){
         this.audioI.play();
      setTimeout(()=>{
        this.okA=0;
        },2000);
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
    if(this.audioS) {
      this.audioS.pause();
      this.audioS = null;
    }
    if(this.audioI) {
      this.audioI.pause();
      this.audioI = null;
    }
  
  }
}
