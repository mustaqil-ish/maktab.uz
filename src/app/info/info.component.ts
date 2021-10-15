import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {


  }
  contact=[{type:1 , name:'Erkak'},{type:2,name:"Ayol"}];

  onNameChange(ngModelObj:any){
    console.log(ngModelObj);
  }
  OnFamiliyaChange(ngModelObj:any){
    console.log(ngModelObj);
  }

  OnXabarChange(ngModelObj:any){
    console.log(ngModelObj);
  }
  
}
