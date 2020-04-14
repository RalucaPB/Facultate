import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/services/agenda.service';
import { AuthService } from 'src/app/services/auth.service';
import Entity from 'src/app/models/entity';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  activities:Entity[];
  id: String;
  angForm: FormGroup;
  disability: string;
 
  constructor(private fb: FormBuilder, private bs: AgendaService,private as: AuthService) {
   
    this.createForm();
    this.id=as.getID();
    this.disability=as.getDisability();
  }

  createForm() {
    this.angForm = this.fb.group({
      activity: ['', Validators.required ],
      date: ['', Validators.required ]
    });
  }

  addAgenda(activity, date) {
    this.bs.addAgenda(this.id, activity, date).subscribe(res => {
      console.log('Added');
      this.bs
      .getActivities(this.id)
      .subscribe((data: Entity[]) => {
        this.activities = data;
        console.log(this.activities);
    });
    });
  }
  deleteActivity(id) {
    this.bs.deleteActivity(id).subscribe(res => {
      console.log('Deleted');
      this.bs
      .getActivities(this.id)
      .subscribe((data: Entity[]) => {
        this.activities = data;
        console.log(this.activities);
    });
    });
    
  }

  ngOnInit() {
    console.log(this.id);
    this.bs
      .getActivities(this.id)
      .subscribe((data: Entity[]) => {
        this.activities = data;
        console.log(this.activities);
    });
  }

}
