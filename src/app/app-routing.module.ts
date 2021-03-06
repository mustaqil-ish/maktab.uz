import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './shared/page-not-found-component/page-not-found-component.component';
import { UserRouteAccessGuard } from './core/user-route-access.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [UserRouteAccessGuard]
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