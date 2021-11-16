import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { XonaService } from './xona.service';
import { Xona } from './xona';

@Component({
  selector: 'app-xona',
  templateUrl: './xona.component.html',
  styleUrls: ['./xona.component.css']
})
export class XonaComponent implements OnInit {
  xonalar: any;
  createForm: any;
  tahrirlash = false;

  constructor(private xonalarService: XonaService, private formBuilder: FormBuilder) { }
  refresh() {
    this.xonalarService.getAll()
      .subscribe((x:any) => {
        this.xonalar = x.content;
      });
  }
  ngOnInit(): void {

    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      sigim: [''],
      nom: [''],
      bino: ['']
    });
  }
  saqlash() {
    const xonalar = this.createForm.value;
    if (!this.tahrirlash) {
      this.xonalarService.create(xonalar)
        .subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.xonalarService.update(xonalar)
        .subscribe(date => {
          this.refresh();
        });
    }
  }
  ochirish(id: number) {

    if (id) {
      this.xonalarService.deleteById(id)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  tahrirlashniBoshlash(xonalar: Xona) {
    this.createForm.reset(xonalar);
    this.tahrirlash = true;
  }
}
