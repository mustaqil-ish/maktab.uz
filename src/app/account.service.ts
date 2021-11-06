import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  getToken(){
    return localStorage.getItem('token');
  }
  api = environment.baseUrl + "/api/account";
  constructor(public http: HttpClient) { }

  login(loginParol: any): Observable<any>{
    return this.http.post(this.api+"/authenticate", loginParol);
  }

  register(user: any): Observable<any>{
    return this.http.post(this.api + "/register", user);
  }


  setToken(token: string){
    localStorage.setItem('token', token);
  }
}
