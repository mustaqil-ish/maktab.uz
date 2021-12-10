import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JwtUtil } from 'src/app/core/jwt.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

myImage:string="assets/images/WIN_20211118_09_24_28_Pro.jpg";



  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter<any>();


  constructor(private jwtUtil:JwtUtil,private router:Router) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


chiqish(){
this.jwtUtil.clear();
this.router.navigate(["/"])
}

}
