import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { DarsComponent } from './dars/dars.component';
import { FanComponent } from './fan/fan.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SinfxonaComponent } from './sinfxona/sinfxona.component';
import { TogarakComponent } from './togarak/togarak.component';
import { UqituvchilarComponent } from './uqituvchilar/uqituvchilar.component';
import { UquvYiliComponent } from './uquv-yili/uquv-yili.component';
import { UquvchilarComponent } from './uquvchilar/uquvchilar.component';
import { XonaComponent } from './xona/xona.component';

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
