import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Uqituvchi } from '../uqituvchilar/Uqituvchi';
import { UqituvchilarService } from '../uqituvchilar/uqituvchilar.service';
import { UquvYili } from '../uquv-yili/uquvYili';
import { Dars } from './dars';

import { DarsService } from './dars.service';

@Component({
  selector: 'app-dars',
  templateUrl: './dars.component.html',
  styleUrls: ['./dars.component.css']
})
export class DarsComponent implements OnInit {
 
  darslar: any;
  createForm: any;
  tahrirlash = false;
  uquvyili!:UquvYili[];
  oqituvchilar!: Uqituvchi[];
  constructor(private darsService: DarsService, private oqituvchiService: UqituvchilarService, private formBuilder: FormBuilder) { }
  refresh() {
    
    this.darsService.getAll()
      .subscribe((o:any) => {
        this.darslar = o.content;
        
      })
       
  }
 
      
      
      
  
  ngOnInit(): void {
    this.oqituvchiService.getAll().subscribe((data:any)=>{
      this.oqituvchilar = data.content;
    })
    this.refresh();
    this.createForm = this.formBuilder.group({
      uqtuvchi: [''],
     
      
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
  tahrirlashniBoshlash(darslar: Dars) {
    this.createForm.reset(darslar)
    this.tahrirlash = true;
  }


}



