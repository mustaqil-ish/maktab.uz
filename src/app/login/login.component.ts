import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private fb: FormBuilder, 
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: [''],
      parol: ['']
    });
  }


  login(){
    const loginParol = this.loginForm.value;
    loginParol.aktiv = true;
    this.accountService.login(loginParol).subscribe((data)=>{
      console.log("keldi", data)
      localStorage.setItem('token', data.token);
      alert("keldi")
    },
    (error)=>{
      console.log("error: ", error)
      alert(error.message)
    });

  }


}