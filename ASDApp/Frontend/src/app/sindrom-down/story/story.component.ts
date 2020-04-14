import { Component, OnInit } from '@angular/core';
import Entity from 'src/app/models/entity';
import { Router } from '@angular/router';
import { EntityServiceService } from 'src/app/services/entity-service.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  animals:Entity[]
  ok:Number=0
  constructor(private router:Router,private entityService:EntityServiceService) { }
 
  ngOnInit() {
    this.entityService
      .getEntities("story")
      .subscribe((data: Entity[]) => {
        this.animals = data;
        console.log(this.animals);
    });
  }
  onSelect(a: Entity): void {
    let audio=new Audio(a.audioPath);
    console.log(audio);
    console.log(this.ok)
    if(this.ok==0){
    audio.play();
    this.ok=1;
    console.log(this.ok)
    }
    setTimeout(()=>{
     this.ok=0;
     
    }, 7000);
   
    }
}
