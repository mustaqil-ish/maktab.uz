
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core-module';
import { UserComponent } from './admin/entity/user/user.component';
import { UserActivDialogComponent } from './admin/entity/user-activ-dialog/user-activ-dialog.component';
import { DeleteDialogComponent } from './shared/dialog/delete-dialog/delete-dialog.component';
import { DarsDeleteDialogComponent } from './shared/dialog/dars-delete-dialog/dars-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserActivDialogComponent,
    DeleteDialogComponent,
    DarsDeleteDialogComponent,
      
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,    
    CoreModule,
    SharedModule,
  ],

  providers: [
    
   
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,

    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }