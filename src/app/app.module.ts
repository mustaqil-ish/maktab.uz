
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UquvchilarComponent } from './admin/entity/uquvchilar/uquvchilar.component';
import { UqituvchilarComponent } from './admin/entity/uqituvchilar/uqituvchilar.component';
import { PageNotFoundComponentComponent } from './admin/entity/page-not-found-component/page-not-found-component.component';
import { XonaComponent } from './admin/entity/xona/xona.component';
import { TogarakComponent } from './admin/entity/togarak/togarak.component';
import { InfoComponent } from './admin/entity/info/info.component';
import { HomeComponent } from './admin/entity/home/home.component';
import { MaterialModule } from './shared/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/auth-interceptor';
import { UquvYiliComponent } from './admin/entity/uquv-yili/uquv-yili.component';
import { DarsComponent } from './admin/entity/dars/dars.component';
import { FanComponent } from './admin/entity/fan/fan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SinfxonaComponent } from './admin/entity/sinfxona/sinfxona.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDeleteDialogSinifxonaComponent } from './shared/dialog/mat-delete-dialog-sinifxona/mat-delete-dialog-sinifxona.component';
import { MatDeleteDialogOqtuvchiComponent } from './shared/dialog/mat-delete-dialog-oqtuvchi/mat-delete-dialog-oqtuvchi.component';
import { MatDeleteUquchiComponent } from './shared/dialog/mat-delete-uquchi/mat-delete-uquchi.component';
import { DeleteDialogTograkComponent } from './shared/dialog/delete-dialog-tograk/delete-dialog-tograk.component';
import { XonaDeleteDialogComponent } from './shared/dialog/xona-delete-dialog/xona-delete-dialog.component';
import { FanDeleteDialogComponent } from './shared/dialog/fan-delete-dialog/fan-delete-dialog.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UquvchilarComponent,
    UqituvchilarComponent,
    PageNotFoundComponentComponent,
    XonaComponent,
    TogarakComponent,
    InfoComponent,
    HomeComponent,
    LoginComponent,
    UquvYiliComponent,
    DarsComponent,
    FanComponent,
    
    SinfxonaComponent,
    MatDeleteDialogSinifxonaComponent,
    MatDeleteDialogOqtuvchiComponent,
    MatDeleteUquchiComponent,
    DeleteDialogTograkComponent,
    XonaDeleteDialogComponent,
    FanDeleteDialogComponent,
   
    SidenavComponent,
    HeaderComponent,
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
   
  ],

  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,

    },
   


  ],

  bootstrap: [AppComponent]

})

export class AppModule { }