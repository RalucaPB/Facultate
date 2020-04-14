import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntityServiceService {
  AUTH_SERVER: string='http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEntities(game) {
    return this
           .http
           .get(`${this.AUTH_SERVER}/entity/${game}`);
  }

}
