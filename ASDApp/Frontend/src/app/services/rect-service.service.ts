import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RectServiceService {

  AUTH_SERVER: string='http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRects(game) {
    return this
           .http
           .get(`${this.AUTH_SERVER}/rect/${game}`);
  }

}