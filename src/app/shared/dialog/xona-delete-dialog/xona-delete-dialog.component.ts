import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-xona-delete-dialog',
  templateUrl: './xona-delete-dialog.component.html',
  styleUrls: ['./xona-delete-dialog.component.css']
})
export class XonaDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<XonaDeleteDialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }

}
