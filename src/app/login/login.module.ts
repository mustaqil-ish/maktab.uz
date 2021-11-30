import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../shared/material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      LoginRoutingModule,
      MatDatepickerModule,
      MatNativeDateModule,

    ],
    declarations: [LoginComponent, RegisterComponent]
  })
export class LoginModule {}
