import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Togarak } from './togarak';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogTograkComponent } from '../../../shared/dialog/delete-dialog-tograk/delete-dialog-tograk.component';


@Injectable({
  providedIn: 'root'
})
export class TogarakService {
  api = environment.baseUrl + "/api/togaraklar";
   
  constructor(private http: HttpClient,private dialog: MatDialog) { }

  openConfirmDialog(msg : any){
    return this.dialog.open(
      DeleteDialogTograkComponent,{
        width: "350px",
        height: "200px",
        data : {
          massage : msg
        }
      });
  }

  public getAll(page: any): Observable<any> {
    return this.http.get<any>(this.api, { params: page });
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