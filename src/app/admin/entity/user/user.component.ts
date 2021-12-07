import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/model/user';

import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  displayedColumns: string[] = ['id', 'ism', 'familiya', 'login', 'parol', 'aktiv', 'amal'];
  dataSource!: MatTableDataSource<User>;
  selectedStatus!: string;
  userlar:any;

  constructor(private userservice:UserService, private formBuilder:FormBuilder){
    this.dataSource = new MatTableDataSource();
  }
ngOnInit(): void{
  this.forma = this.formBuilder.group({

    id:[''],
    ism:[''],
    familiya:[''],
    login:[''],
    parol:[''],
    aktiv:[null],
    
  });
  this.selectedStatus = "";
  this.userservice.getAll().subscribe(data=>{
    this.data = data;
  })
}
saqlash() {
  const userlar = this.forma.getRawValue();
  this.userservice.create(userlar).subscribe(data => {
    this.forma.reset ();
  })
}

edit(userlar: any) {
  this.forma.reset(userlar);
  this.tahrir = true;
}
delete(row: any) {
  this.userservice.openConfirmDialog(`o'chirasizmi ${row.id} ? `).afterClosed().subscribe(
    (data => {
      if (data) {
        this.userservice.deleteById(row.id).subscribe(() => {
         
        })
      }
    }));
}
}