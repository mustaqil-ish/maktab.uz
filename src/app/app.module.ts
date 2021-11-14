
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UquvchilarComponent } from './uquvchilar/uquvchilar.component';
import { UqituvchilarComponent } from './uqituvchilar/uqituvchilar.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { XonaComponent } from './xona/xona.component';
import { TogarakComponent } from './togarak/togarak.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/MaterialModule';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth-interceptor';
import { AuthGuard } from './core/auth.guard';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UquvYiliComponent } from './uquv-yili/uquv-yili.component';
import { DarsComponent } from './dars/dars.component';



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
  // { path: 'guruh', component: GuruhComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    UquvchilarComponent,
    UqituvchilarComponent,
    PageNotFoundComponentComponent,
    XonaComponent,
    TogarakComponent,
    InfoComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    UquvYiliComponent,
    DarsComponent,
    


  ],
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,

  ],


  exports: [
    RouterModule

  ],


  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,

    }
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }