import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Uqituvchi } from '../uqituvchilar/Uqituvchi';
import { UqituvchilarService } from '../uqituvchilar/uqituvchilar.service';
import { UquvYili } from '../uquv-yili/uquvYili';
import { DarsService } from './dars.service';

@Component({
  selector: 'app-dars',
  templateUrl: './dars.component.html',
  styleUrls: ['./dars.component.css']
})
export class DarsComponent implements OnInit ,AfterViewInit {
 
  darslar: any;
  createForm: any;
  tahrirlash = false;
  uquvyili!:UquvYili[];
  oqituvchilar!: Uqituvchi[];

  // refresh() {
    
  //   this.darsService.getAll()
  //     .subscribe((o:any) => {
  //       this.darslar = o.content;
        
  //     })
       
  // }
 
      
  // ngOnInit(): void {
  //   this.oqituvchiService.getAll().subscribe((data:any)=>{
  //     this.oqituvchilar = data.content;
  //   })

  //   this.refresh();
  //   this.createForm = this.formBuilder.group({
  //     uqtuvchi: [''],
     
  //   });
  // }
  // saqlash() {
  //   const oqituvchilar = this.createForm.value;
  //   if (!this.tahrirlash) {
  //     this.darsService.create(oqituvchilar)
  //       .subscribe(data => {
  //         this.refresh();
  //       });
  //   }
  //   else {
  //     this.darsService.update(oqituvchilar)
  //       .subscribe(data => {
  //         this.refresh();
  //       });
  //   }
  // }
  // ochirish(id: number) {
  //   if (id) {
  //     this.darsService.deleteById(id)
  //       .subscribe(data => {
  //         this.refresh();
  //       });
  //   }
  // }
  // tahrirlashniBoshlash(darslar: Dars) {
  //   this.createForm.reset(darslar)
  //   this.tahrirlash = true;
  // }


  displayedColumns: string[] = ['id', 'uqtuvchi', 'amal'];
  data = [];
  key = '';
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private darsService: DarsService, private oqtuvchiService:UqituvchilarService,
    public fb: FormBuilder) { }
  ngOnInit(): void {
    this.forma = this.fb.group({
      uqtuvchi: [''],
    
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

          return this.darsService.getAll(pageable)
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
  qidirish() {
    const darslar = this.forma.value;
    this.key = darslar.id;
    console.log(this.key);

    this.paginator._changePageSize(this.paginator.pageSize);
  }
  saqlash() {
    const darslar = this.forma.getRawValue();


    this.darsService.create(darslar).subscribe(data => {
      this.key = "";
      this.forma.reset();
      this.sort.sortChange.next(this.sort);

    })
  }
  edit(dars: any) {
    this.forma.reset(dars);
    this.tahrir = true;
  }

  delete(row: any) {
    
          this.darsService.deleteById(row.id).subscribe(() => {
            this.sort.sortChange.next(this.sort);
          })
        }
  
}



