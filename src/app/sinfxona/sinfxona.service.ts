import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDeleteDialogSinifxonaComponent } from '../fan/Dialog/mat-delete-dialog-sinifxona/mat-delete-dialog-sinifxona.component';
import { Sinf } from './sinfxona';

@Injectable({
  providedIn: 'root'
})
export class SinfxonaService {

  api = environment.baseUrl + "/api/sinf";
  
  constructor(private http: HttpClient,private dialog: MatDialog) { }

  openConfirmDialog(msg : any){
    return this.dialog.open(
      MatDeleteDialogSinifxonaComponent,{
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
  public create(sinflar: Sinf): Observable<Sinf> {
    return this.http.post<Sinf>(this.api, sinflar)
  }
  public update(sinflar: Sinf): Observable<Sinf> {
    return this.http.put<Sinf>(this.api, sinflar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
