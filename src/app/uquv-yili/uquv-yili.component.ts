import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UquvYiliService } from './uquv-yili.service';
import { UquvYili } from './uquvYili';

@Component({
  selector: 'app-uquv-yili',
  templateUrl: './uquv-yili.component.html',
  styleUrls: ['./uquv-yili.component.css']
})
export class UquvYiliComponent implements OnInit {
  panelOpenState = true;
  uquv: any;
  createForm: any;
  tahrirlash = false;
  constructor(private UquvYiliService: UquvYiliService, private formBuilder: FormBuilder) { }
  refresh() {
    this.UquvYiliService.getAll()
      .subscribe(uq => {
        this.uquv = uq;
      });
  }
  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      boshlanganVaqt: [''],
      tugaganVaqt: [''],
      izoh: [''],

    });
  }
  saqlash() {
    const uquv = this.createForm.value;
    if (!this.tahrirlash) {
      this.UquvYiliService.create(uquv)
        .subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.UquvYiliService.update(uquv)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  ochirish(id: number) {
    if (id) {
      this.UquvYiliService.deleteById(id)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  tahrirlashniBoshlash(uquv: UquvYili) {
    this.createForm.reset(uquv)
    this.tahrirlash = true;
  }
}





