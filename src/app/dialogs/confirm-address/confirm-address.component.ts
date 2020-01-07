import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-address',
  templateUrl: './confirm-address.component.html',
  styleUrls: ['./confirm-address.component.css']
})
export class ConfirmAddressComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmAddressComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
