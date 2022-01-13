import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/shared/dialog/delete-dialog/delete-dialog.component';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = environment.baseUrl + '/api/user'; 
  
  constructor(private http: HttpClient,private dialog: MatDialog) { }

  openConfirmDialog(msg : any){
    return this.dialog.open(
      DeleteDialogComponent,{
        width: "350px",
        height: "200px", 
        data : {
          massage : msg
        }
      });
  }

  public getAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  public create(userlar: User): Observable<User> {
    return this.http.post<User>(this.api, userlar);
  }
  public update(userlar: User): Observable<User> {
    return this.http.put<User>(this.api, userlar);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id);
  }


  
  // uploadProfileImage(formData: FormData): Observable<any> {
  //   return this.http.post<FormData>('/api/users/upload', formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  // }


}
