import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




import { MaterialModule } from './material/material.module';
import { RouterTabs } from './roter-tab/router-tabs.directive';
import { RouterTab } from './roter-tab/roter-tab.directive';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';








@NgModule({
  imports: [ CommonModule, MaterialModule, RouterModule],
  declarations: [PageNotFoundComponentComponent, RouterTabs, RouterTab ],

  exports: [
  
    CommonModule,
    PageNotFoundComponentComponent,
    RouterTabs,
    RouterTab,
    
    

  ]
})
export class SharedModule {}
