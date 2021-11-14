import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Uqituvchi } from '../uqituvchilar/Uqituvchi';
import { UqituvchilarService } from '../uqituvchilar/uqituvchilar.service';
import { UquvYiliService } from '../uquv-yili/uquv-yili.service';
import { UquvYili } from '../uquv-yili/uquvYili';
import { Dars } from './dars';

import { DarsService } from './dars.service';

@Component({
  selector: 'app-dars',
  templateUrl: './dars.component.html',
  styleUrls: ['./dars.component.css']
})
export class DarsComponent implements OnInit {
 
  uquvchilar: any;
  createForm: any;
  tahrirlash = false;
  uquvyili!:UquvYili[];
  oqituvchilar!: Uqituvchi[];
  constructor(private darsService: DarsService, private oqituvchiService: UqituvchilarService, private formBuilder: FormBuilder) { }
  refresh() {
    this.darsService.getAll()
      .subscribe(o => {
        this.uquvchilar = o;
      });
  }
  ngOnInit(): void {
    this.oqituvchiService.getAll().subscribe(data=>{
      this.oqituvchilar = data;
    })
    this.refresh();
    this.createForm = this.formBuilder.group({
      uqtuvchi: [''],
      uquvYili:[''],

      
    });
  }
  saqlash() {
    const oqituvchilar = this.createForm.value;
    if (!this.tahrirlash) {
      this.darsService.create(oqituvchilar)
        .subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.darsService.update(oqituvchilar)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  ochirish(id: number) {
    if (id) {
      this.darsService.deleteById(id)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  tahrirlashniBoshlash(uquvchilar: Dars) {
    this.createForm.reset(uquvchilar)
    this.tahrirlash = true;
  }


}



