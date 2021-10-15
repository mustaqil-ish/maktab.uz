import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCarouselSlideComponent } from '@ngmodule/material-carousel';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatCarouselModule,
  ]
 
})
export class AppRoutingModule { }
