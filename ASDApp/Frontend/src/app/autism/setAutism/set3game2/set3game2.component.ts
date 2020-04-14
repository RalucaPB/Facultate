import { Component, OnInit } from '@angular/core';
import Circle from 'src/app/models/circle';
import { Router } from '@angular/router';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import { RectServiceService } from 'src/app/services/rect-service.service';
import Rect from 'src/app/models/rect';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set3game2',
  templateUrl: './set3game2.component.html',
  styleUrls: ['./set3game2.component.scss']
})
export class Set3game2Component implements OnInit {
  circles:Circle[];
  ok:number=0
  rects:Rect[];
exercises:Exercise
okA:number=1
audioC:any;
audioB:any;
audioI:any;

  constructor(private router:Router,private svgService:SvgServiceService,private rectService:RectServiceService,private exerciseService:ExerciseServiceService) { }
  ngOnInit() {
    this.svgService
      .getSvgs("s3g2")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.rectService
    .getRects("s3g2")
    .subscribe((data: Rect[]) => {
      this.rects = data;
      console.log(this.rects);
  });
  this.exerciseService
  .getExercises("s3g2")
  .subscribe((data: Exercise) => {
    this.exercises = data;
    console.log(this.exercises);
    this.audioC=new Audio(this.exercises[0].audioPath);

    this.audioC.play();
    setTimeout(()=>{
      this.okA=0;
      
     }, 5000);
});
  }

  CheckWin()
  {
   this.ok+=1;
    
    if (this.ok == 10)
    { 
      this.audioB=new Audio("../../../../assets/audios/Bravo.m4a");
      this.audioB.play();
     
      this.okA=1;
     
      setTimeout(()=>{
        this.circles.forEach(function (value) {
          value.fill="white";
        });
        this.router.navigate(['/main/homeAutism/sets/set3game3']);
       
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
