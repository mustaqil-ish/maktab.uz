import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-uqituvchilar',
  templateUrl: './uqituvchilar.component.html',
  styleUrls: ['./uqituvchilar.component.css']
})
export class UqituvchilarComponent implements OnInit {
url="http://localhost:8080/uqituvchilar";
uqituvchilar:any;

createForm:any;

  constructor(private http:HttpClient,private formBuilder:FormBuilder ) { }


refresh(){
  this.http.get(this.url).subscribe(u => {
    this.uqituvchilar = u;
   });
}

  ngOnInit(): void {
this.refresh();
this.createForm = this.formBuilder.group({
  ism:[''],
  familiya:[''],
  yosh:[''],
  jins:[''],
  maosh:['']
});

  }
  saqlash(){
    const uqituvchilar = this.createForm.value;
    this.http.post(this.url,uqituvchilar).subscribe(data => {
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

  updateUqtuvchi(updateUqtuvchi:Object){
    this.http.put(this.url,this.uqituvchilar).subscribe (date =>{
      this.refresh();
    })

  }

}
