import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-delete-dialog-oqtuvchi',
  templateUrl: './mat-delete-dialog-oqtuvchi.component.html',
  styleUrls: ['./mat-delete-dialog-oqtuvchi.component.css']
})
export class MatDeleteDialogOqtuvchiComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<MatDeleteDialogOqtuvchiComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }


}
