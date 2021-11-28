import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponentComponent } from '../admin/entity/page-not-found-component/page-not-found-component.component'; 


import { MaterialModule } from '../shared/material/material.module';
import { RouterTabs } from '../admin/entity/roter-tab/router-tabs.directive';
import { RouterTab } from '../admin/entity/roter-tab/roter-tab.directive';



@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule],
  declarations: [    PageNotFoundComponentComponent, RouterTabs, RouterTab,],
   

  exports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    PageNotFoundComponentComponent,
    RouterTabs,
    RouterTab,
    
    

  ]
})
export class SharedModule {}
