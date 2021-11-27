import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Fan } from '../fan/fan';
import { FanService } from '../fan/fan.service';
import { Sinfxona } from '../sinfxona/sinfxona';
import { SinfxonaService } from '../sinfxona/sinfxona.service';
import { Uqituvchi } from '../uqituvchilar/Uqituvchi';
import { UqituvchilarService } from '../uqituvchilar/uqituvchilar.service';
import { Uquvchi } from '../uquvchilar/uquvchi';
import { UquvchilarService } from '../uquvchilar/uquvchilar.service';
import { Xona } from '../xona/xona';
import { XonaService } from '../xona/xona.service';
import { DarsService } from './dars.service';

@Component({
  selector: 'app-dars',
  templateUrl: './dars.component.html',
  styleUrls: ['./dars.component.css']
})
export class DarsComponent implements OnInit, AfterViewInit {


  darslar: any;
  createForm: any;
  tahrirlash = false;
  oqituvchilar!: Uqituvchi[];
  sinflar!: Sinfxona[];
  fanlar!: Fan[];
  xonalar!: Xona[];
  oquvchilar!:Uquvchi[];
  displayedColumns: string[] = ['id', 'uqtuvchi' , 'uquvchi', 'fan', 'sinfxona', 'xona',  'amal'];
  data = [];
  key = '';
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  forma: any;
  tahrir = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private darsService: DarsService,

    private uqituvchiService: UqituvchilarService,

    private sinfService: SinfxonaService,

    private fanService: FanService,

    private xonaService: XonaService,

    private oquvchiService:UquvchilarService,

    public fb: FormBuilder) { }
  ngOnInit(): void {
    this.forma = this.fb.group({
      uqtuvchi: [''],
      sinfxona: [''],
      fan: [''],
      xona: [''],
      uquvchi:[''],
    


    })
  }

  ngAfterViewInit() {
    this.uqituvchiService.getAll(null).subscribe(data => {
      this.oqituvchilar = data.content;
      // 

    });
       this.oquvchiService.getAll(null).subscribe((data:any)=>{
         this.oquvchilar = data.content;
       })
    

    this.sinfService.getAll(null).subscribe((data: any) => {
      this.sinflar = data.content;
      console.log(this.sinflar[0].nom);
    });
    this.fanService.getAll(null).subscribe((data: any) => {
      this.fanlar = data.content;
    });
    this.xonaService.getAll(null).subscribe((data: any) => {
      this.xonalar = data.content;
    });

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



