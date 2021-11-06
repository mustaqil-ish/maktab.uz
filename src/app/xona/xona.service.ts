import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Xona } from './xona';

@Injectable({
  providedIn: 'root'
})
export class XonaService {
  api = environment.baseUrl + "/api/xona"

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Xona> {
    return this.http.get<Xona>(this.api)
  }
  public create(xonalar: Xona): Observable<Xona> {
    return this.http.post<Xona>(this.api, xonalar)
  }

  public update(xonalar: Xona): Observable<Xona> {
    return this.http.put<Xona>(this.api, xonalar)
  }

  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }


}
