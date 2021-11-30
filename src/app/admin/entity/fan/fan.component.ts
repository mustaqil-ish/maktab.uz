import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Fan } from '../../../shared/model/fan';
import { FanService } from '../../../shared/service/fan.service';

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.css']
})
export class FanComponent implements OnInit {

  // fanlar: any;
  // createForm: any;
  // tahrirlash = false;
  // constructor(private fanservice: FanService, private formBuilder: FormBuilder) { }

  // refresh() {
  //   this.fanservice.getAll()
  //     .subscribe((f: any) => {
  //       this.fanlar = f.content;
  //     });
  // }
  // ngOnInit(): void {
  //   this.refresh();
  //   this.createForm = this.formBuilder.group({
  //     id: [''],
  //     nom: [''],

  //   });
  // }
  // saqlash() {
  //   const fanlar = this.createForm.value;
  //   if (!this.tahrirlash) {
  //     this.fanservice.create(fanlar)
  //       .subscribe(data => {
  //         this.refresh();
  //       });
  //   }
  //   else {
  //     this.fanservice.update(fanlar)
  //       .subscribe(data => {
  //         this.refresh();
  //       });
  //   }
  // }
  // ochirish(id: number) {
  //   if (id) {
  //     this.fanservice.deleteById(id)
  //       .subscribe(data => {
  //         this.refresh();
  //       });
  //   }
  // }
  // tahrirlashniBoshlash(fanlar: Fan) {
  //   this.createForm.reset(fanlar)
  //   this.tahrirlash = true;
  // }


  displayedColumns: string[] = ['id', 'nom', 'amal'];
  data = [];
  key = '';
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fanService: FanService,
    public fb: FormBuilder, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.forma = this.fb.group({
      id: [''],
      nom: [''],

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

          return this.fanService.getAll(pageable)
            .pipe(catchError(() => of(null)));
        }),
        map((data: any) => {
          // Flip flag to show that loading has finished.
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
    if (filterField) {
      this.key = filterField;
    } else {
      this.key = ""; 
    }
    this.sort.sortChange.next(this.sort);
  }


  saqlash() {
    const fanlar = this.forma.getRawValue();


    this.fanService.create(fanlar).subscribe(data => {
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
    this.fanService.openConfirmDialog(`o'chirasizmi ${row.id} ? `).afterClosed().subscribe(
      (data => {
        if (data) {
          this.fanService.deleteById(row.id).subscribe(() => {
            this.sort.sortChange.next(this.sort);
          })
        }
      }));
  }

}
