import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Uqituvchi } from '../uqituvchilar/Uqituvchi';
import { Uquvchi } from './uquvchi';

@Injectable({
  providedIn: 'root'
})
export class UquvchilarService {
  api = environment.baseUrl + "/api/uquvchilar";
  constructor(private http: HttpClient) { }
  public  getAll(): Observable<Uquvchi> {
    return this.http.get<Uquvchi>(this.api)
  }
  public create(uquvchilar: Uqituvchi): Observable<Uquvchi> {
    return this.http.post<Uquvchi>(this.api, uquvchilar)
  }
  public update(uquvchilar: Uquvchi): Observable<Uquvchi> {
    return this.http.put<Uquvchi>(this.api, uquvchilar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
