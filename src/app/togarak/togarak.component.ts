import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-togarak',
  templateUrl: './togarak.component.html',
  styleUrls: ['./togarak.component.css']
})
export class TogarakComponent implements OnInit {

  url="http://localhost:8080/togaraklar";
  togaraklar:any;
  createForm:any;

  constructor(private http:HttpClient,private formBuilder:FormBuilder) { }
refresh(){
  this.http.get(this.url).subscribe(t => { 
this.togaraklar = t;
  });
}



  ngOnInit(): void {
    this.refresh();
    this.createForm = this.formBuilder.group({
      soat:[''],
      fan:[''],
      oqtuvchi:['']
    });


}
saqlash(){
  const togaraklar = this.createForm.value;
  this.http.post(this.url,togaraklar).subscribe(data => {
    this.refresh();
  });
  }

  ochirish(id:number){
    if(id){
      this.http.delete(this.url+"/" + id).subscribe(date =>{
        this.refresh();
      });
    }
  }
}
