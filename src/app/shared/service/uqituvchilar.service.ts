import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDeleteDialogOqtuvchiComponent } from '../dialog/mat-delete-dialog-oqtuvchi/mat-delete-dialog-oqtuvchi.component';
import { Uqituvchi } from '../model/Uqituvchi';

@Injectable({
  providedIn: 'root'
})
export class UqituvchilarService {
  api = environment.baseUrl + "/api/uqituvchilar";
  constructor(private http: HttpClient,private dialog: MatDialog) { }

  openConfirmDialog(msg : any){
    return this.dialog.open(
      MatDeleteDialogOqtuvchiComponent,{
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
  public create(oqituvchilar: Uqituvchi): Observable<Uqituvchi> {
    return this.http.post<Uqituvchi>(this.api, oqituvchilar)
  }
  public update(oqituvchilar: Uqituvchi): Observable<Uqituvchi> {
    return this.http.put<Uqituvchi>(this.api, oqituvchilar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}
