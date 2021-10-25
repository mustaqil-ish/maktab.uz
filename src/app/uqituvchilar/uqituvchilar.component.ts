
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uqituvchilar',
  templateUrl: './uqituvchilar.component.html',
  styleUrls: ['./uqituvchilar.component.css']
})
export class UqituvchilarComponent implements OnInit {
  uqituvchilar: any;
  createForm: any;
  tahrirlash = false;
  url =  environment.baseUrl + "/uqituvchilar";
  httpClient: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  refresh() {
    this.http.get(this.url).subscribe(u => {
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
      this.http.post(this.url, uqituvchilar).subscribe(data => {
        this.refresh();
      });
    }
    else {
      this.http.put(this.url, uqituvchilar).subscribe(data => {
        this.refresh();
        
      });
    }
  }
  ochirish(id: number) {
    if (id) {
      this.http.delete(this.url + "/" + id).subscribe(data => {
        this.refresh();
      });
    }
  }
  tahrirlashniBoshlash(uqituvchilar: any) {
    this.createForm.reset(uqituvchilar)
    this.tahrirlash = true;
  }
}

