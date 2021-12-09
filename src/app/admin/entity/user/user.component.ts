import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/model/user';

import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {



  data = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  displayedColumns: string[] = ['id', 'ism', 'familiya', 'login', 'aktiv', 'amal'];
  dataSource!: MatTableDataSource<User>;
  selectedStatus!: string;
  userlar: any;

  constructor(private userservice: UserService, private formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource();
  }
  ngAfterViewInit(): void {
    this.selectedStatus = "";
    this.userservice.getAll().subscribe(data => {
      this.data = data;
      this.isLoadingResults = false;
    })
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      id: [''],
      ism: [''],
      familiya: [''],
      login: [''],
      parol: [''],
      aktiv: [''],

    });
    this.loadData();



  }

  loadData() {
    this.userservice.getAll().subscribe(data => {
      this.data = data;
    })
  }
  saqlash() {
    const userlar = this.forma.getRawValue();
    this.userservice.create(userlar).subscribe(data => {
      this.forma.reset();
      this.loadData();
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
            this.loadData();
          })
        }
      }));
  }
}