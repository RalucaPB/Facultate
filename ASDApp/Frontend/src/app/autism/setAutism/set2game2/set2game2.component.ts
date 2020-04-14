import { Component, OnInit } from '@angular/core';
import Circle from 'src/app/models/circle';
import { SvgServiceService } from 'src/app/services/svg-service.service';
import { Router } from '@angular/router';
import { ExerciseServiceService } from 'src/app/services/exercise-service.service';
import Exercise from 'src/app/models/exercise';

@Component({
  selector: 'app-set2game2',
  templateUrl: './set2game2.component.html',
  styleUrls: ['./set2game2.component.scss']
})
export class Set2game2Component implements OnInit {

  circles:Circle[];
  circleC:Circle;
  ok:number=0
  exercises:Exercise
  okA:number=1
audioC:any;
audioB:any;
audioI:any;

  constructor(private router:Router,private svgService:SvgServiceService,private exerciseService:ExerciseServiceService) { }
 
  ngOnInit() {
    this.svgService
      .getSvgs("s2g2")
      .subscribe((data: Circle[]) => {
        this.circles = data;
        console.log(this.circles);
    });
    this.svgService
    .getSvgs("s2g2c")
    .subscribe((data: Circle) => {
      this.circleC = data;
      console.log(this.circleC);
  });
  this.exerciseService
  .getExercises("s2g2")
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
        this.router.navigate(['/main/homeAutism/sets/set2game3']);
       
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
