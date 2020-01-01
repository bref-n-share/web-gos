import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-orga-details',
  templateUrl: './orga-details.component.html',
  styleUrls: ['./orga-details.component.css']
})
export class OrgaDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrgaDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
