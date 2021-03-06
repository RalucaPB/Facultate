import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import Circle from 'src/app/models/circle';
import { RectServiceService } from 'src/app/services/rect-service.service';
import { PolygonServiceService } from 'src/app/services/polygon-service.service';
import Rect from 'src/app/models/rect';
import Polygon from 'src/app/models/polygon';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set4game4',
  templateUrl: './set4game4.component.html',
  styleUrls: ['./set4game4.component.scss']
})
export class Set4game4Component implements OnInit {

  exercises:Exercise
  circles:Circle[];
  ok:number=0
  rects:Rect;
  polygon:Polygon;
  circleC:Circle;
  okA:number=1
audioC:any;
audioB:any;
audioI:any;
  constructor(private router:Router,private svgService:SvgServiceService,private rectService:RectServiceService,private polygonService:PolygonServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.svgService
      .getSvgs("s4g4")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.svgService
    .getSvgs("s4g4c")
    .subscribe((data: Circle ) => {
      this.circleC = data;
      console.log(this.circleC);
  });
    this.rectService
    .getRects("s4g4")
    .subscribe((data: Rect) => {
      this.rects = data;
      console.log(this.rects);
  });
  this.polygonService
  .getPolygons("s4g4")
  .subscribe((data: Polygon ) => {
    this.polygon = data;
    console.log(this.polygon);
  });
  this.exerciseService
  .getExercises("s4g4")
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
        this.router.navigate(['/main/homeAutism/sets/set4game5']);
       
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
