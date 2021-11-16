import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Fan } from './fan';
import { FanService } from './fan.service';

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.css']
})
export class FanComponent implements OnInit {
  
  fanlar: any;
  createForm: any;
  tahrirlash = false;
  constructor(private fanservice: FanService, private formBuilder: FormBuilder) { }

  refresh() {
    this.fanservice.getAll()
      .subscribe((f: any) => {
        this.fanlar = f.content;
      });
  }
  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      id: [''],
      nom: [''],
   
    });
  }
  saqlash() {
    const fanlar = this.createForm.value;
    if (!this.tahrirlash) {
      this.fanservice.create(fanlar)
        .subscribe(data => {
          this.refresh();
        });
    }
    else {
      this.fanservice.update(fanlar)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  ochirish(id: number) {
    if (id) {
      this.fanservice.deleteById(id)
        .subscribe(data => {
          this.refresh();
        });
    }
  }
  tahrirlashniBoshlash(fanlar: Fan) {
    this.createForm.reset(fanlar)
    this.tahrirlash = true;
  }

}
