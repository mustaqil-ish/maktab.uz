import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Lavozim } from '../shared/model/lavozimlar';
import { JwtUtil } from './jwt.util';

@Injectable({
  providedIn: 'root'
})
export class DirectorGuard implements CanActivate {
  
  constructor(private router: Router,
               private jwtUtil: JwtUtil,
               private _snackBar: MatSnackBar
               ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('isLoggedin')) {
       const roles = this.jwtUtil.getRoles();
       console.log(roles);
      if(roles.includes(Lavozim.ADMIN) || roles.includes(Lavozim.DIREKTOR)|| roles.includes(Lavozim.DIREKTOR)){
        return true;
      } else {
        this._snackBar.open("Sizga bu bo'limda ishlashga huquq berilmagan!", 'X',  {
          duration: 4000,
       verticalPosition: 'bottom',
    
       });
     
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
