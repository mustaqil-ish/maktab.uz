import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Guruh } from './guruh';
import { GuruhService } from './guruh.service';

@Component({
  selector: 'app-guruh',
  templateUrl: './guruh.component.html',
  styleUrls: ['./guruh.component.css']
})
export class GuruhComponent implements OnInit {

  guruhlar: any;
  createForm: any;
  tahrirlash = false;
  constructor(private guruhService: GuruhService, private formBuilder: FormBuilder) { }
  refresh() {
    this.guruhService.getAll()
      .subscribe(t => {
        this.guruhlar = t;
      });
  }

  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      nom: [''],
      UquvYili: [''],
      
    })
  }
  saqlash() {
    const guruhlar = this.createForm.value;
    if (!this.tahrirlash) {
      this.guruhService.create(guruhlar).
        subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.guruhService.update(guruhlar)
        .subscribe(date => {
          this.refresh();
        });
    }
    this.tahrirlash = false;
  }
  ochirish(id: number) {
    if (id) {
      this.guruhService.deleteById(id)
      .subscribe(date => {
        this.refresh();
      });
    }
  }
  tahrirlashniBoshlash(guruhlar: Guruh) {
    this.createForm.reset(guruhlar);
    this.tahrirlash = true;
  }

}
