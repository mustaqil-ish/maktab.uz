
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Uqituvchi } from './Uqituvchi';
import { UqituvchilarService } from './uqituvchilar.service';
@Component({
  selector: 'app-uqituvchilar',
  templateUrl: './uqituvchilar.component.html',
  styleUrls: ['./uqituvchilar.component.css']
})
export class UqituvchilarComponent implements OnInit {
  uqituvchilar: any;
  createForm: any;
  tahrirlash = false;
  constructor(private uqituvchilarService: UqituvchilarService, public formBuilder: FormBuilder) { }
  refresh() {
    this.uqituvchilarService.getAll()
      .subscribe(u => {
        this.uqituvchilar = u;
      });
  }
  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      ism: [''],
      familiya: [''],
      yosh: [''],
      jins: [''],
      maosh: ['']
    });
  }
  saqlash() {
    const uqituvchilar = this.createForm.value;
    if (!this.tahrirlash) {
      this.uqituvchilarService.create(uqituvchilar)
        .subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.uqituvchilarService.update(uqituvchilar)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  ochirish(id: number) {
    if (id) {
      this.uqituvchilarService.deleteById(id)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  tahrirlashniBoshlash(uqituvchilar: Uqituvchi) {
    this.createForm.reset(uqituvchilar)
    this.tahrirlash = true;
  }
}

