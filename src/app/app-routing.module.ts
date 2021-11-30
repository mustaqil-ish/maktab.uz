import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './shared/page-not-found-component/page-not-found-component.component';
import { UserRouteAccessService } from './core/user-route-access.service';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./app.module').then((m) => m.AppModule),
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', component: PageNotFoundComponentComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



 

export class AppRoutingModule { }