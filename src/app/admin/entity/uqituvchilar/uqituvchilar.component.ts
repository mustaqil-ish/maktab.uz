import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Uqituvchi } from './Uqituvchi';

import { UqituvchilarService } from './uqituvchilar.service';
@Component({
  selector: 'app-uqituvchilar',
  templateUrl: './uqituvchilar.component.html',
  styleUrls: ['./uqituvchilar.component.css']
})
export class UqituvchilarComponent implements OnInit, AfterViewInit {

  selectedStatus!: string;
  public toggleForm1!: boolean;

  displayedColumns: string[] = ['id', 'ism', 'familiya', 'yosh', 'maosh', 'jins', 'amal'];
  dataSource: MatTableDataSource<Uqituvchi>;
  data: Uqituvchi[] = [];
  key = '';
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filteredCustomerList: any;
  customerList: any;

  constructor(private oqituvchilarServive: UqituvchilarService,
    public fb: FormBuilder, private dialog: MatDialog) {

    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.forma = this.fb.group({

      'jins': new FormControl(),
      id: [''],
      ism: [''],
      familiya: [''],
      yosh: [''],
      // jins: [''],
      maosh: ['']

    })
    this.selectedStatus = "";
  }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          let pageable = {
            key: this.key,
            size: this.paginator.pageSize,
            sort: this.sort.active + "," + this.sort.direction,
            page: this.paginator.pageIndex
          }

          return this.oqituvchilarServive.getAll(pageable)
            .pipe(catchError(() => of(null)));
        }),
        map((data: any) => {

          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.totalElements;
          return data.content;
        })
      ).subscribe(data => this.data = data);
  }



  qidirish(event: any) {
    const filterField = event.target.value;
     console.log(event.target.value);
     
    if (filterField) {
      this.key = filterField;
    } else {
      this.key = "";
      
    }
    this.sort.sortChange.next(this.sort);
  }




  saqlash() {
    const oqituvchilar = this.forma.getRawValue();
    this.oqituvchilarServive.create(oqituvchilar).subscribe(data => {
      this.key = "";
      this.forma.reset();
      this.sort.sortChange.next(this.sort);
    })
  }

  edit(oqtuvchi: any) {
    this.forma.reset(oqtuvchi);
    this.tahrir = true;
  }
  delete(row: any) {
    this.oqituvchilarServive.openConfirmDialog(`o'chirasizmi ${row.id} ? `).afterClosed().subscribe(
      (data => {
        if (data) {
          this.oqituvchilarServive.deleteById(row.id).subscribe(() => {
            this.sort.sortChange.next(this.sort);
          })
        }
      }));
  }
















}

