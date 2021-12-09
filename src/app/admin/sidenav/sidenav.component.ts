import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/account.service';
import { Lavozim } from 'src/app/shared/model/lavozimlar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  avatar!:string;
  isAdmin = false;
  constructor(private accountService: AccountService) { }

  ngAfterViewInit(): void {

    this.isAdmin = this.accountService.hasAnyAuthority([Lavozim.ADMIN, Lavozim.DIREKTOR]);
  }

}
