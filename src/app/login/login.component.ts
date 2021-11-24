import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

  
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
      console.log("tasqinlandi", data)
      localStorage.setItem('token', data.token);
      alert("tasqinlandi")
    },
    (error)=>{
      console.log("error: ", error)
      alert(error.message)
    });

  }


}