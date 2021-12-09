import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { UserRouteAccessGuard } from "../core/user-route-access.guard";
import { Lavozim } from "../shared/model/lavozimlar";
// import { DashboardComponent } from "./dashboard/dashboard.component";
import { DarsComponent } from "./entity/dars/dars.component";
import { FanComponent } from "./entity/fan/fan.component";
import { SinfxonaComponent } from "./entity/sinfxona/sinfxona.component";
import { TogarakComponent } from "./entity/togarak/togarak.component";
import { UqituvchilarComponent } from "./entity/uqituvchilar/uqituvchilar.component";
import { UquvYiliComponent } from "./entity/uquv-yili/uquv-yili.component";
import { UquvchilarComponent } from "./entity/uquvchilar/uquvchilar.component";
import { UserComponent } from "./entity/user/user.component";
import { XonaComponent } from "./entity/xona/xona.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: "xona"
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserRouteAccessGuard],
        data:{
          authorities: [Lavozim.ADMIN, Lavozim.DIREKTOR]
        }
      },
      { path: 'oqituvchilar', component: UqituvchilarComponent},
      { path: 'oquvchilar', component: UquvchilarComponent },
      { path: 'xona', component: XonaComponent },
      { path: 'togarak', component: TogarakComponent, canActivate: [UserRouteAccessGuard] },
      { path: 'uquvYili', component: UquvYiliComponent, canActivate: [UserRouteAccessGuard] },
      { path: 'dars', component: DarsComponent, canActivate: [UserRouteAccessGuard] },
      { path: 'fan', component: FanComponent, canActivate: [UserRouteAccessGuard] },
      { path: 'sinf', component: SinfxonaComponent, canActivate: [UserRouteAccessGuard] },
      // {path:'user' ,component:UserComponent ,canActivate:[UserRouteAccessGuard]},




    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})












export class AdminRoutingModule { }