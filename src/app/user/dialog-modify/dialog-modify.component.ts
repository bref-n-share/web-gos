import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../models/User';

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './dialog-modify.component.html',
  styleUrls: ['./dialog-modify.component.css']
})
export class DialogModifyComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User) {}

  cancelled(): void {
    this.dialogRef.close();
  }

  saved(): void {
    this.dialogRef.close(this.user);
  }

}
