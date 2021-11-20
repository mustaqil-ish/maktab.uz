import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-delete-uquchi',
  templateUrl: './mat-delete-uquchi.component.html',
  styleUrls: ['./mat-delete-uquchi.component.css']
})
export class MatDeleteUquchiComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<MatDeleteUquchiComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }

}
