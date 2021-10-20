import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uquvchilar',
  templateUrl: './uquvchilar.component.html',
  styleUrls: ['./uquvchilar.component.css']
})
export class UquvchilarComponent implements OnInit {

  url="http://localhost:8080/uquvchilar";
  uquvchilar:any;
  createForm:any;

  constructor(private http:HttpClient ,private formBuilder:FormBuilder) { }


refresh(){
  this.http.get(this.url).subscribe(o => {
    this.uquvchilar = o;
  });
}

  ngOnInit(): void {

    this.refresh();
    this.createForm = this.formBuilder.group({
      ism:[''],
      familiya:[''],
      sharif:[''],
      yosh:[''],
      sinf:['']
    });
  }


saqlash(){

const uquvchilar = this.createForm.value;
this.http.post(this.url, uquvchilar).subscribe(data =>{
this.refresh();
});

}
ochirish(id:number){
  if(id){
    this.http.delete(this.url + "/" + id).subscribe(data =>{
      this.refresh();
    });
  }
}

}
