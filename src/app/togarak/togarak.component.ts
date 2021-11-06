
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Togarak } from './togarak';
import { TogarakService } from './togarak.service';

@Component({
  selector: 'app-togarak',
  templateUrl: './togarak.component.html',
  styleUrls: ['./togarak.component.css']
})
export class TogarakComponent implements OnInit {
  togaraklar: any;
  createForm: any;
  tahrirlash = false;
  constructor(private togarakService: TogarakService, public formBuilder: FormBuilder) { }
  refresh() {
    this.togarakService.getAll()
      .subscribe(t => {
        this.togaraklar = t;
      });
  }

  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      soat: [''],
      fan: [''],
      oqtuvchi: ['']
    })
  }
  saqlash() {
    const togaraklar = this.createForm.value;
    if (!this.tahrirlash) {
      this.togarakService.create(togaraklar).
        subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.togarakService.update(togaraklar)
        .subscribe(date => {
          this.refresh();
        });
    }
    this.tahrirlash = false;
  }
  ochirish(id: number) {
    if (id) {
      this.togarakService.deleteById(id)
      .subscribe(date => {
        this.refresh();
      });
    }
  }
  tahrirlashniBoshlash(togaraklar: Togarak) {
    this.createForm.reset(togaraklar);
    this.tahrirlash = true;
  }
}
