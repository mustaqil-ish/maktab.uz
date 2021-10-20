import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-xona',
  templateUrl: './xona.component.html',
  styleUrls: ['./xona.component.css']
})
export class XonaComponent implements OnInit {


  url="http://localhost:8080/xona";
  xonalar:any;
  createForm:any;

  constructor(private http:HttpClient ,private formBuilder:FormBuilder) { }


refresh(){
  this.http.get(this.url).subscribe(x => {
    this.xonalar = x;
  });
}

  ngOnInit(): void {

    this.refresh();
    this.createForm = this.formBuilder.group({
      sigim:[''],
      nom:[''],
      bino:['']
     
    });
  }


saqlash(){

const xonalar = this.createForm.value;
this.http.post(this.url, xonalar).subscribe(data =>{
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
