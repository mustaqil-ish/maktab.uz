import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FanDeleteDialogComponent } from './Dialog/fan-delete-dialog/fan-delete-dialog.component';
import { Fan } from './fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {
  api = environment.baseUrl + "/api/fan";

  constructor(private http: HttpClient,private dialog: MatDialog) { }

  openConfirmDialog(msg : any){
    return this.dialog.open(
      FanDeleteDialogComponent,{
        width: "350px",
        height: "200px",
        data : {
          massage : msg
        }
      });
  }

  getAll(page: any): Observable<any> {
    return this.http.get<any>(this.api, { params: page });
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
