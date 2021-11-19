import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-delete-dialog-sinifxona',
  templateUrl: './mat-delete-dialog-sinifxona.component.html',
  styleUrls: ['./mat-delete-dialog-sinifxona.component.css']
})
export class MatDeleteDialogSinifxonaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<MatDeleteDialogSinifxonaComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }

}
