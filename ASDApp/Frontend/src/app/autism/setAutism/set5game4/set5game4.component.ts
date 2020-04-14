import { Component, OnInit } from '@angular/core';
import Circle from 'src/app/models/circle';
import { Router } from '@angular/router';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import Polygon from 'src/app/models/polygon';
import { PolygonServiceService } from 'src/app/services/polygon-service.service';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set5game4',
  templateUrl: './set5game4.component.html',
  styleUrls: ['./set5game4.component.scss']
})
export class Set5game4Component implements OnInit {
exercises:Exercise
  circles:Circle[];
  ok:number=0
  polygons:Polygon[];
  circleC:Circle;
  okA:number=1
  audioC:any;
  audioB:any;
  audioI:any;
  constructor(private router:Router,private svgService:SvgServiceService,private polygonService:PolygonServiceService,private exerciseService:ExerciseServiceService) { }
  ngOnInit() {
    this.svgService
      .getSvgs("s5g4")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.svgService
    .getSvgs("s5g4c")
    .subscribe((data: Circle ) => {
      this.circleC = data;
      console.log(this.circleC);
  });
    
  this.polygonService
  .getPolygons("s5g4")
  .subscribe((data: Polygon[] ) => {
    this.polygons = data;
    console.log(this.polygons);
  });
  this.exerciseService
  .getExercises("s5g4")
  .subscribe((data: Exercise) => {
    this.exercises = data;
    console.log(this.exercises);
    this.audioC=new Audio(this.exercises[0].audioPath);

    this.audioC.play();
    setTimeout(()=>{
      this.okA=0;
      
     }, 6000);
});
  }

  CheckWin()
  {
   this.ok+=1;
    
    if (this.ok == 6)
    { 
      this.audioB=new Audio("../../../../assets/audios/Bravo.m4a");
      this.audioB.play();
     
      this.okA=1;
     
      setTimeout(()=>{
        this.circles.forEach(function (value) {
          value.fill="white";
        });
        this.router.navigate(['/main/homeAutism/sets/set5game5']);
       
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
