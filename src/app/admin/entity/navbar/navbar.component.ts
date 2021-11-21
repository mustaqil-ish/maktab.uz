
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
})
export class NavbarComponent implements OnInit {



  isExpanded = false;
  element!: HTMLElement;

  toggleActive(event:any){
    
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
    } 
    var target = event.currentTarget;
    target.style.backgroundColor = "#b1afae";
    this.element = target;
  }


  constructor(){


 

  }



  ngOnInit(){

 

  }
 

}
