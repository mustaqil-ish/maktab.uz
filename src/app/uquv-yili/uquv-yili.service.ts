import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UquvYili } from './uquvYili';

@Injectable({
  providedIn: 'root'
})
export class UquvYiliService {
  api = environment.baseUrl + "/api/uquvYili";

  constructor(private http:HttpClient) { }
  getAll(): Observable<UquvYili[]> {
    return this.http.get<UquvYili[]>(this.api)
  }
  create(uquvYillari: UquvYili): Observable<UquvYili> {
    return this.http.post<UquvYili>(this.api, uquvYillari)
  }

  update(uquvYillari: UquvYili): Observable<UquvYili> {
    return this.http.put<UquvYili>(this.api, uquvYillari)
  }
  deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
 
}
