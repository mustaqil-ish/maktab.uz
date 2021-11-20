import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { UquvYiliService } from './uquv-yili.service';

@Component({
  selector: 'app-uquv-yili',
  templateUrl: './uquv-yili.component.html',
  styleUrls: ['./uquv-yili.component.css']
})
export class UquvYiliComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'boshlanganVaqt', 'tugaganVaqt', 'izoh', 'amal'];
  data = [];
  key = '';
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private oquvYiliService: UquvYiliService,
    public fb: FormBuilder) { }
  ngOnInit(): void {
    this.forma = this.fb.group({
      Id: [''],
      boshlanganVaqt: [''],
      tugaganVaqt: [''],
      izoh: [''],

    })
  }

  ngAfterViewInit() {

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

          return this.oquvYiliService.getAll(pageable)
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
  qidirish() {
    const oquvyili = this.forma.value;
    this.key = oquvyili.id;
    console.log(this.key);

    this.paginator._changePageSize(this.paginator.pageSize);
  }
  saqlash() {
    const sinflar = this.forma.getRawValue();


    this.oquvYiliService.create(sinflar).subscribe(data => {
      this.key = "";
      this.forma.reset();
      this.sort.sortChange.next(this.sort);

    })
  }
  edit(sinf: any) {
    this.forma.reset(sinf);
    this.tahrir = true;
  }

  delete(row: any) {
    this.oquvYiliService.deleteById(row.id).subscribe(() => {
      this.sort.sortChange.next(this.sort);
    })
  }


}





