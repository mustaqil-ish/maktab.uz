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

  public getAll(): Observable<Uqituvchi[]> {
    return this.http.get<Uqituvchi[]>(this.api)
  }
  public create(oqituvchilar: Uqituvchi): Observable<Uqituvchi> {
    return this.http.post<Uqituvchi>(this.api, oqituvchilar)
  }
  public update(oqituvchilar: Uqituvchi): Observable<Uqituvchi> {
    return this.http.put<Uqituvchi>(this.api, oqituvchilar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
