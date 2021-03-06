import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDeleteDialogSinifxonaComponent } from '../dialog/mat-delete-dialog-sinifxona/mat-delete-dialog-sinifxona.component';
import { Sinfxona } from '../model/sinfxona';

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
    return this.http.get<any[]>(this.api, { params: page });
  }

  public create(sinflar: Sinfxona): Observable<Sinfxona> {
    return this.http.post<Sinfxona>(this.api, sinflar)
  }
  public update(sinflar: Sinfxona): Observable<Sinfxona> {
    return this.http.put<Sinfxona>(this.api, sinflar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
