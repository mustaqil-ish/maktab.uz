import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dars } from './dars';

@Injectable({
  providedIn: 'root'
})
export class DarsService {


  api = environment.baseUrl + "/api/dars";

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }
  public create(Darslar: Dars): Observable<Dars> {
    return this.http.post<Dars>(this.api, Darslar);
  }

  public update(Darslar: Dars): Observable<Dars> {
    return this.http.put<Dars>(this.api, Darslar);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id);


  }
}
