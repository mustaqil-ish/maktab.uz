import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'src/app/core/account.service';
import { User } from 'src/app/shared/model/user';


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit ,AfterViewInit  {

  displayedColumns: string[] = [ 'ism', 'familiya'];
  dataSource: MatTableDataSource<User>;
  data!: User | null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  passForm:any;

  constructor(private userService:AccountService,public fb:FormBuilder ) {
    this.dataSource = new MatTableDataSource;
   }

  ngOnInit(): void {
       this.forma= this.fb.group({  
       ism: [''],
       familiya: [''],
      //  login:[''],
     
    })
  }

  ngAfterViewInit(): void {
    this.userService.identity().subscribe(data => {
      this.data = data;
      this.forma.reset(data);
    })
  }

  edit(user: any) {
    this.forma.reset(user);
    this.tahrir = true;

  }

 saqlash() {
    const userlar = this.forma.getRawValue();
    this.userService.save(userlar).subscribe(data => { 

      this.ngAfterViewInit();


    })
  }

save(){

}


}
