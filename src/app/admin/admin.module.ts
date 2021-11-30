import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "../shared/material/material.module";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { DarsComponent } from "./entity/dars/dars.component";
import { FanComponent } from "./entity/fan/fan.component";
import { SinfxonaComponent } from "./entity/sinfxona/sinfxona.component";
import { TogarakComponent } from "./entity/togarak/togarak.component";
import { UqituvchilarComponent } from "./entity/uqituvchilar/uqituvchilar.component";
import { UquvYiliComponent } from "./entity/uquv-yili/uquv-yili.component";
import { UquvchilarComponent } from "./entity/uquvchilar/uquvchilar.component";
import { XonaComponent } from "./entity/xona/xona.component";
import { LayoutComponent } from "./layout.component";
import { DeleteDialogTograkComponent } from "../shared/dialog/delete-dialog-tograk/delete-dialog-tograk.component";
import { FanDeleteDialogComponent } from "../shared/dialog/fan-delete-dialog/fan-delete-dialog.component";
import { MatDeleteDialogOqtuvchiComponent } from "../shared/dialog/mat-delete-dialog-oqtuvchi/mat-delete-dialog-oqtuvchi.component";
import { MatDeleteUquchiComponent } from "../shared/dialog/mat-delete-uquchi/mat-delete-uquchi.component";
import { XonaDeleteDialogComponent } from "../shared/dialog/xona-delete-dialog/xona-delete-dialog.component";
import { MatDeleteDialogSinifxonaComponent } from "../shared/dialog/mat-delete-dialog-sinifxona/mat-delete-dialog-sinifxona.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations:[
        SidenavComponent,
        DashboardComponent,
        UqituvchilarComponent,
        UquvchilarComponent,
        TogarakComponent,
        UquvYiliComponent,
        SinfxonaComponent,
        XonaComponent,
        FanComponent,
        DarsComponent,
        LayoutComponent,
        HeaderComponent,
        DeleteDialogTograkComponent,
        FanDeleteDialogComponent,
        MatDeleteDialogOqtuvchiComponent,
        MatDeleteUquchiComponent,
        XonaDeleteDialogComponent,
        MatDeleteDialogSinifxonaComponent,
        
        
        
    ],
    imports: [
       
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        SharedModule
      ],
})








export class AdminModule{}