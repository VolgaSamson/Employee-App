import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:8080/api/v1/users';
  

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })    
  }
  
  constructor(private _http: HttpClient) { }


  loginCheck(loginDetails:any){
    return this._http.post<Boolean>(this.apiUrl+'/login',loginDetails, this.httpOptions);
  }
  

  signup(signupDetails:any){
    return this._http.post<Boolean>(this.apiUrl+'/signup',signupDetails, this.httpOptions);
  }

}
