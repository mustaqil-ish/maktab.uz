import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DarsComponent } from './admin/entity/dars/dars.component';
import { FanComponent } from './admin/entity/fan/fan.component';
import { HomeComponent } from './admin/entity/home/home.component';
import { InfoComponent } from './admin/entity/info/info.component';
import { PageNotFoundComponentComponent } from './admin/entity/page-not-found-component/page-not-found-component.component';
import { SinfxonaComponent } from './admin/entity/sinfxona/sinfxona.component';
import { TogarakComponent } from './admin/entity/togarak/togarak.component';
import { UqituvchilarComponent } from './admin/entity/uqituvchilar/uqituvchilar.component';
import { UquvYiliComponent } from './admin/entity/uquv-yili/uquv-yili.component';
import { UquvchilarComponent } from './admin/entity/uquvchilar/uquvchilar.component';
import { XonaComponent } from './admin/entity/xona/xona.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'boshSahifa', component: HomeComponent },
  { path: 'oqituvchilar', component: UqituvchilarComponent, canActivate: [AuthGuard] },
  { path: 'oquvchilar', component: UquvchilarComponent, canActivate: [AuthGuard] },
  { path: 'xona', component: XonaComponent, canActivate: [AuthGuard] },
  { path: 'togarak', component: TogarakComponent, canActivate: [AuthGuard] },
  { path: 'info', component: InfoComponent, canActivate: [AuthGuard] },
  { path: 'uquvYili', component: UquvYiliComponent, canActivate: [AuthGuard] },
  { path: 'dars', component: DarsComponent, canActivate: [AuthGuard] },
  { path: 'fan', component: FanComponent, canActivate: [AuthGuard] },
  { path: 'sinf', component: SinfxonaComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }