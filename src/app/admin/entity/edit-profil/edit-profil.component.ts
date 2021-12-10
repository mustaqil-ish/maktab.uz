import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/core/account.service';
import { User } from 'src/app/shared/model/user';


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit ,AfterViewInit  {
  
  data!: User | null;
  forma: any;
  tahrir = false;
  passForm:any;

  constructor(private userService:AccountService,public fb:FormBuilder ) {
    
   }

  ngOnInit(): void {
       this.forma= this.fb.group({  
       ism: [''],
       familiya: [''],
      
    });
       this.passForm= this.fb.group({  
       eskiParol: [''],
       yangiParol: [''],
       confirm: [''],
      
    })
  }

  ngAfterViewInit(): void {
    this.userService.identity().subscribe(data => {
      this.data = data;
      this.forma.reset(data);
  
    })
  }

  edit(user: any) {
    this.forma.reset(user);
    this.passForm.reset(user);
    this.tahrir = true;
    
  }

 saqlash() {
    const userlar = this.forma.getRawValue();
    this.userService.save(userlar).subscribe(data => { 
      this.ngAfterViewInit();

    })
  }

save(){
  const users  = this.passForm.getRawValue();
  this.userService.savePassword(users).subscribe(data =>{
    this.ngAfterViewInit();
  })
}
}
