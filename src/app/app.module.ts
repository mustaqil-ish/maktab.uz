import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UquvchilarComponent } from './uquvchilar/uquvchilar.component';
import { UqituvchilarComponent } from './uqituvchilar/uqituvchilar.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { XonaComponent } from './xona/xona.component';
import { TogarakComponent } from './togarak/togarak.component';
import { InfoComponent } from './info/info.component';
import { MoreComponent } from './more/more.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { RoutingModule } from './routing/routing.module';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'boshSahifa',component:HomeComponent},
{path: 'navbar',component:NavbarComponent},
{path: 'oqituvchilar',component:UqituvchilarComponent},
{path:'oquvchilar',component:UquvchilarComponent},
{path:'xona',component:XonaComponent},
{path:'togarak',component:TogarakComponent},
{path:'info',component:InfoComponent},
{path:'more',component:MoreComponent},
{path:'**',component:PageNotFoundComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  UquvchilarComponent,
  UqituvchilarComponent,
  PageNotFoundComponentComponent,
  NavbarComponent,
  HomeComponent,
  XonaComponent,
  TogarakComponent,
  InfoComponent,
  MoreComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }