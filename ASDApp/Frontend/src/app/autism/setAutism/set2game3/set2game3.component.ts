import { Component, OnInit } from '@angular/core';
import Circle from 'src/app/models/circle';
import { Router } from '@angular/router';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import Polygon from 'src/app/models/polygon';
import { PolygonServiceService } from 'src/app/services/polygon-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set2game3',
  templateUrl: './set2game3.component.html',
  styleUrls: ['./set2game3.component.scss']
})
export class Set2game3Component implements OnInit {
  circles:Circle[];
  polygon:Polygon;
  ok:number=0
exercises:Exercise
okA:number=1
audioC:any;
audioB:any;
audioI:any;


  constructor(private router:Router,private svgService:SvgServiceService,private polygonService:PolygonServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.svgService
      .getSvgs("s2g3")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.polygonService
    .getPolygons("s2g3")
    .subscribe((data: Polygon) => {
      this.polygon = data;
      console.log(this.polygon);
  });
  
  this.exerciseService
  .getExercises("s2g3")
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
    
    if (this.ok == 5)
    { 
      this.audioB=new Audio("../../../../assets/audios/Bravo.m4a");
      this.audioB.play();
     
      this.okA=1;
     
     
      setTimeout(()=>{
        this.circles.forEach(function (value) {
          value.fill="white";
        });
        this.router.navigate(['/main/homeAutism/sets/set2game4']);
       
      },3000);
  
      
    }
  }

  onSelect(a: Circle): void {
   
    if(a.class=="st0" && a.fill=="white")
    {
      if(this.okA==0){
        a.fill="red";
        this.CheckWin();
        }
        
      }
      else{
        this.audioI=new Audio("../../../../assets/audios/MaiIncearca.m4a");
        if(this.okA==0){
           this.audioI.play();
           this.okA=1;
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
   
    if(this.audioI) {
      this.audioI.pause();
      this.audioI = null;
    }
  
  }
}
