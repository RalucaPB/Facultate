import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../model/animal.source';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  animals=ANIMALS;


  constructor() { 
     router: Router
    
  }

  ngOnInit() {
  }
  onSelect(a: Animal): void {
  let audio=new Audio(a.audioPath);
  console.log(audio);
  audio.play();
  }
}
