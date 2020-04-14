import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  AUTH_SERVER: string='http://localhost:3000';

  constructor(private http: HttpClient) { }
  addAgenda(idUser, activity, date) {
    const obj = {
      idUser: idUser,
      activity: activity,
      date: date
    };
    console.log(obj);
    return this.http.post(`${this.AUTH_SERVER}/add`, obj)
        
  }
  getActivities(email1) {
    return this
           .http
           .get(`${this.AUTH_SERVER}/all/${email1}`);
  }
  deleteActivity(id) {
    return this
              .http
              .delete(`${this.AUTH_SERVER}/delete/${id}`);
  }
}
