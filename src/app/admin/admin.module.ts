import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { DashboardComponent } from "./dashboard/dashboard.component";
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
// import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditProfilComponent } from "./entity/edit-profil/edit-profil.component";

@NgModule({
    declarations:[
        SidenavComponent,
        HeaderComponent,
        // DashboardComponent,
        UqituvchilarComponent,
        UquvchilarComponent,
        TogarakComponent,
        UquvYiliComponent,
        SinfxonaComponent,
        XonaComponent,
        FanComponent,
        DarsComponent,
        LayoutComponent,
        DeleteDialogTograkComponent,
        FanDeleteDialogComponent,
        MatDeleteDialogOqtuvchiComponent,
        MatDeleteUquchiComponent,
        XonaDeleteDialogComponent,
        MatDeleteDialogSinifxonaComponent,
        EditProfilComponent

    ],
    imports: [
       
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
})

export class AdminModule{}