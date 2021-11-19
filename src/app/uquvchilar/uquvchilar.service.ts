import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDeleteUquchiComponent } from '../fan/Dialog/mat-delete-uquchi/mat-delete-uquchi.component';
import { Uquvchi } from './uquvchi';


@Injectable({
  providedIn: 'root'
})
export class UquvchilarService {
  api = environment.baseUrl + "/api/uquvchilar";

  constructor(private http: HttpClient ,private dialog:MatDialog) { }

  openConfirmDialog(msg : any){
    return this.dialog.open(
      MatDeleteUquchiComponent,{
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
  public create(uquvchilar: Uquvchi): Observable<Uquvchi> {
    return this.http.post<Uquvchi>(this.api, uquvchilar)
  }
  public update(uquvchilar: Uquvchi): Observable<Uquvchi> {
    return this.http.put<Uquvchi>(this.api, uquvchilar)
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id)
  }
}


