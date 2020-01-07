import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {MatDialog} from '@angular/material';
import {DialogDeleteComponent} from './dialog-delete/dialog-delete.component';
import {DialogModifyComponent} from './dialog-modify/dialog-modify.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private rooter: Router) {
  }

  user: User = {
    id: 1,
    username: 'bastien.plaza42@gmail.com',
    firstname: 'Bastien',
    lastname: 'Plaza',
    password: '',
    status: 'Accepted',
    structure: 'Emmaus Lyon',
    role: 'Admin'
  };


  ngOnInit() {
  }

  deleteAccount(): void {
    const dialogRefDelete = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: {...this.user}
    });
    dialogRefDelete.afterClosed().subscribe(result => {
        if (result) {
          this.rooter.navigate(['/']);
        }
    });
  }

  modifyAccount() {
    const dialogRefModify = this.dialog.open(DialogModifyComponent, {
      width: '250px',
      data: {...this.user}
    });
    dialogRefModify.afterClosed().subscribe(result => {
      if (result) {
        this.user = result;
      }
    });
  }

}
