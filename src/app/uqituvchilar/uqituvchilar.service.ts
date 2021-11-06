import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Uqituvchi } from './Uqituvchi';

@Injectable({
  providedIn: 'root'
})
export class UqituvchilarService {
  api = environment.baseUrl + "/api/uqituvchilar";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Uqituvchi> {
    return this.http.get<Uqituvchi>(this.api)
  }
  create(uqituvchilar: Uqituvchi): Observable<Uqituvchi> {
    return this.http.post<Uqituvchi>(this.api, uqituvchilar)
  }

  update(uqituvchilar: Uqituvchi): Observable<Uqituvchi> {
    return this.http.put<Uqituvchi>(this.api, uqituvchilar)
  }
  deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
