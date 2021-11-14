import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guruh } from './guruh';

@Injectable({
  providedIn: 'root'
})
export class GuruhService {

  api = environment.baseUrl + "/api/guruh";

  constructor(private http:HttpClient) { }

 public getAll():Observable<Guruh>{
    return this.http.get<Guruh>(this.api);
  }
 public create(guruhlar:Guruh):Observable<Guruh>{
    return this.http.post<Guruh>(this.api,guruhlar);
  }
 public update(guruhlar:Guruh):Observable<Guruh>{
    return this.http.put<Guruh>(this.api,guruhlar);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id);
  }
}
