import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fan } from './fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {
  api = environment.baseUrl + "/api/fan";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Fan> {
    return this.http.get<Fan>(this.api)
  }
  public create(fanlar: Fan): Observable<Fan> {
    return this.http.post<Fan>(this.api, fanlar)
  }
  public update(fanlar: Fan): Observable<Fan> {
    return this.http.put<Fan>(this.api, fanlar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
