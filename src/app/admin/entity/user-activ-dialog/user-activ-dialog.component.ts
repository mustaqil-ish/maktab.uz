import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-activ-dialog',
  templateUrl: './user-activ-dialog.component.html',
  styleUrls: ['./user-activ-dialog.component.css']
})
export class UserActivDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {status: string}) { }

  ngOnInit(): void {
  }

}
