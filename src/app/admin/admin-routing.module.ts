import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DarsComponent } from "./entity/dars/dars.component";
import { FanComponent } from "./entity/fan/fan.component";
import { SinfxonaComponent } from "./entity/sinfxona/sinfxona.component";
import { TogarakComponent } from "./entity/togarak/togarak.component";
import { UqituvchilarComponent } from "./entity/uqituvchilar/uqituvchilar.component";
import { UquvYiliComponent } from "./entity/uquv-yili/uquv-yili.component";
import { UquvchilarComponent } from "./entity/uquvchilar/uquvchilar.component";
import { XonaComponent } from "./entity/xona/xona.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            redirectTo: "dashboard"
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
    { path: 'oqituvchilar', component: UqituvchilarComponent, canActivate: [AuthGuard] },
    { path: 'oquvchilar', component: UquvchilarComponent, canActivate: [AuthGuard] },
    { path: 'xona', component: XonaComponent, canActivate: [AuthGuard] },
    { path: 'togarak', component: TogarakComponent, canActivate: [AuthGuard] },
    { path: 'uquvYili', component: UquvYiliComponent, canActivate: [AuthGuard] },
    { path: 'dars', component: DarsComponent, canActivate: [AuthGuard] },
    { path: 'fan', component: FanComponent, canActivate: [AuthGuard] },
    { path: 'sinf', component: SinfxonaComponent, canActivate: [AuthGuard] 
   
},
],
}

];

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[RouterModule]

})












    export class AdminRoutingModule { }