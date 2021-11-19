
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UquvchilarComponent } from './uquvchilar/uquvchilar.component';
import { UqituvchilarComponent } from './uqituvchilar/uqituvchilar.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { XonaComponent } from './xona/xona.component';
import { TogarakComponent } from './togarak/togarak.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/auth-interceptor';
import { UquvYiliComponent } from './uquv-yili/uquv-yili.component';
import { DarsComponent } from './dars/dars.component';
import { FanComponent } from './fan/fan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './navbar/navbar.component';
import { SinfxonaComponent } from './sinfxona/sinfxona.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDeleteDialogSinifxonaComponent } from './mat-delete-dialog-sinifxona/mat-delete-dialog-sinifxona.component';
import { MatDeleteDialogOqtuvchiComponent } from './mat-delete-dialog-oqtuvchi/mat-delete-dialog-oqtuvchi.component';
import { DarsDialogDeleteComponent } from './dars-dialog-delete/dars-dialog-delete.component';
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
    NavbarComponent,
    SinfxonaComponent,
    MatDeleteDialogSinifxonaComponent,
    MatDeleteDialogOqtuvchiComponent,
    DarsDialogDeleteComponent





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