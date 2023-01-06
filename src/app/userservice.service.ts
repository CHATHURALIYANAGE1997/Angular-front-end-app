import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  login(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient ) { }

  getAllUsers() {
    return fetch('https://fakestoreapi.com/users');
  }

  getUserData(postid: any) {
    // console.log(postid)
    return fetch('https://fakestoreapi.com/users/' + postid)
  }

 public userLogin(username: any, password: any):Observable<any> {
    // console.log(username)
    return this.http.post<any>('https://fakestoreapi.com/auth/login',{  
   
        username: username,
        password: password
  
});

  }




}
