import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SinfxonaService } from '../../../shared/service/sinfxona.service';
@Component({
  selector: 'app-sinfxona',
  templateUrl: './sinfxona.component.html',
  styleUrls: ['./sinfxona.component.css']
})
export class SinfxonaComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'nom', 'boshlanganVaqt', 'amal'];
  data = [];
  key = '';
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sinfServivce: SinfxonaService,
    public fb: FormBuilder, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.forma = this.fb.group({
      id: [''],
      nom: [''],
      boshlanganVaqt: [''],

    })
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

          return this.sinfServivce.getAll(pageable)
            .pipe(catchError(() => of(null)));
        }),
        map((data: any) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.

          this.resultsLength = data.totalElements;
          return data.content;
        })
      ).subscribe(data => this.data = data);
  }


  qidirish(event: any) {
    const filterField = event.target.value; 
    if (filterField) {
      this.key = filterField;
    } else {
      this.key = ""; 
    }
    this.sort.sortChange.next(this.sort);
  }

  
  saqlash() {
    const sinflar = this.forma.getRawValue();


    this.sinfServivce.create(sinflar).subscribe(data => {
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
    this.sinfServivce.openConfirmDialog(`o'chirasizmi ${row.id} ? `).afterClosed().subscribe(
      (data => {
        if (data) {
          this.sinfServivce.deleteById(row.id).subscribe(() => {
            this.sort.sortChange.next(this.sort);
          })
        }
      }));
  }
}


