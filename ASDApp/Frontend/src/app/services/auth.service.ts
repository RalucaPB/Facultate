import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  AUTH_SERVER: string='http://localhost:3000';
  authSubject=new BehaviorSubject(false);
  private token:string;
  private disability:string;
  private _id:string;
  
  constructor(private httpClient:HttpClient){

  }

  register1(user:User):Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,
    user).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken,res.dataUser._id,res.dataUser.expiresIn,res.dataUser.autism,res.dataUser.sindromDown);
          
        }
      })
      );
  }

  login1(user:User):Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken,res.dataUser._id,res.dataUser.expiresIn,res.dataUser.autism,res.dataUser.sindromDown);
       
        }
      })
      );
  }

  register(name,email,password,autism,sindromDown):Observable<JwtResponse>{
    const obj = {
      username:name,
      email: email,
      password: password,
      autism:autism,
      sindromDown:sindromDown
      
    };
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,
    obj).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken,res.dataUser._id,res.dataUser.expiresIn,res.dataUser.autism,res.dataUser.sindromDown);
          
        }
      })
      );
  }

  login(email,password):Observable<JwtResponse>{
    const obj = {
      email: email,
      password: password
    };
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/login`,
    obj).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken,res.dataUser._id,res.dataUser.expiresIn,res.dataUser.autism,res.dataUser.sindromDown);
       
        }
      })
      );
  }

  logout(){
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("ID");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.removeItem("DISABILITY");
  }

  private saveToken(token: string,_id:string, expiresIn:string,autism:boolean,sindromDown:boolean):void{
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRES_IN",expiresIn);
    localStorage.setItem("ID",_id);
    if(autism==true){
      localStorage.setItem("DISABILITY","autism");
    }else{
      localStorage.setItem("DISABILITY","sindromDown");

  }
    this.token=token;
  }

  public getToken(): string{
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
  public getID(): string{
    if(!this._id){
      this._id=localStorage.getItem("ID");
    }
    return this._id;
  }
  public getDisability(): string{
    if(!this.disability || this.disability!=localStorage.getItem("DISABILITY")){
      this.disability=localStorage.getItem("DISABILITY");
    }
    return this.disability;
  }
  updateUserPassword( password,_id) {

    const obj = {
        
        password: password
      };
   return  this
      .httpClient
      .put(`${this.AUTH_SERVER}/updateUserParola/${_id}`, obj);
     
  }
  updateUserUsername( username,_id) {

    const obj = {
        username: username 
      };
   return  this
      .httpClient
      .put(`${this.AUTH_SERVER}/updateUserUsername/${_id}`, obj);
     
  }
  getUsers(email1) {
    return this
           .httpClient
           .get(`${this.AUTH_SERVER}/allUser/${email1}`);
  }
}
