import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dars } from './dars';

@Injectable({
  providedIn: 'root'
})
export class DarsService {


  api = environment.baseUrl + "/api/dars";

  constructor(private http: HttpClient,private dialog: MatDialog) { }

  // openConfirmDialog(msg : any){
  //   return this.dialog.open(
  //     MatDialogDarsComponent,{
  //       width: "350px",
  //       height: "200px",
  //       data : {
  //         massage : msg
  //       }
  //     });
  // }

  
  
  getAll(page: any): Observable<any> {
    return this.http.get<any>(this.api, { params: page });
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
