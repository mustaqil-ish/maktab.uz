import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Uquvchi } from './uquvchi';
import { UquvchilarService } from './uquvchilar.service';
@Component({
  selector: 'app-uquvchilar',
  templateUrl: './uquvchilar.component.html',
  styleUrls: ['./uquvchilar.component.css']
})
export class UquvchilarComponent implements OnInit {
  uquvchilar: any;
  createForm: any;
  tahrirlash = false;
  constructor(private uquvchilarService: UquvchilarService, private formBuilder: FormBuilder) { }
  refresh() {
    this.uquvchilarService.getAll()
      .subscribe((o:any) => {
        this.uquvchilar = o.content;
      });
  }
  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      ism: [''],
      familiya: [''],
      sharif: [''],
      yosh: [''],
      sinf: ['']
    });
  }
  saqlash() {
    const uquvchilar = this.createForm.value;
    if (!this.tahrirlash) {
      this.uquvchilarService.create(uquvchilar)
        .subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.uquvchilarService.update(uquvchilar)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  ochirish(id: number) {
    if (id) {
      this.uquvchilarService.deleteById(id)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  tahrirlashniBoshlash(uquvchilar: Uquvchi) {
    this.createForm.reset(uquvchilar)
    this.tahrirlash = true;
  }
}
