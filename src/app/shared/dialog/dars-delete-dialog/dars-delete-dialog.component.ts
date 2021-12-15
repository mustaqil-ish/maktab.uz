import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dars-delete-dialog',
  templateUrl: './dars-delete-dialog.component.html',
  styleUrls: ['./dars-delete-dialog.component.css']
})
export class DarsDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<DarsDeleteDialogComponent>) { }


 

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }

}
