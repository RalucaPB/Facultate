import { Component, OnInit } from '@angular/core';
import Circle from 'src/app/models/circle';
import { Router } from '@angular/router';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import { RectServiceService } from 'src/app/services/rect-service.service';
import Rect from 'src/app/models/rect';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set2game1',
  templateUrl: './set2game1.component.html',
  styleUrls: ['./set2game1.component.scss']
})
export class Set2game1Component implements OnInit {
  circles:Circle[];
  rects:Rect;
  ok:number=0
  okA:number=1
exercises:Exercise
audioC:any;
audioB:any;
audioI:any;


  constructor(private router:Router,private svgService:SvgServiceService,private rectService:RectServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.svgService
      .getSvgs("s2g1")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.rectService
    .getRects("s2g1")
    .subscribe((data: Rect) => {
      this.rects = data;
      console.log(this.rects);
  });
  this.exerciseService
  .getExercises("s2g1")
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
    
    if (this.ok == 5)
    { 
      this.audioB=new Audio("../../../../assets/audios/Bravo.m4a");
      this.audioB.play();
     
      this.okA=1;
      setTimeout(()=>{
        this.circles.forEach(function (value) {
          value.fill="white";
        });
        this.router.navigate(['/main/homeAutism/sets/set2game2']);
       
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