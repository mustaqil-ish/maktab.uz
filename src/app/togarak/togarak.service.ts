import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Togarak } from './togarak';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TogarakService {
  api = environment.baseUrl + "/api/togaraklar";
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Togarak> {
    return this.http.get<Togarak>(this.api);
  }

  public create(togaraklar: Togarak): Observable<Togarak> {
    return this.http.post<Togarak>(this.api, togaraklar);
  }
  public update(togaraklar: Togarak): Observable<Togarak> {
    return this.http.put<Togarak>(this.api, togaraklar);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id);
  }
}