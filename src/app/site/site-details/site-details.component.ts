import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Site} from '../../models/Site';

@Component({
  selector: 'app-orga-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SiteDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Site
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
