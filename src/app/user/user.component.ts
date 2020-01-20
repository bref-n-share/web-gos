import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {MatDialog} from '@angular/material';
import {DialogDeleteComponent} from './dialog-delete/dialog-delete.component';
import {DialogModifyComponent} from './dialog-modify/dialog-modify.component';
import {Router} from '@angular/router';
import {AccountApiService} from '../services/account-api.service';
import {UserService} from '../services/user.service';
import {Structure} from "../models/Structure";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  struct: Structure;
  user: User = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    status: '',
    role: '',
    structure: this.struct,
  };

  constructor(public dialog: MatDialog,
              private rooter: Router,
              private accountApiService: AccountApiService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.accountApiService.getUserById(this.userService.user.id).subscribe((user) => {
      this.user = user;
    });
  }

  deleteAccount(): void {
    const dialogRefDelete = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: {...this.user}
    });
    dialogRefDelete.afterClosed().subscribe(result => {
        if (result) {
          this.accountApiService.deleteUSer(this.user.id).subscribe((ret) => {
            this.userService.logout();
          });
        }
    });
  }

  modifyAccount() {
    const dialogRefModify = this.dialog.open(DialogModifyComponent, {
      width: '250px',
      data: {...this.user}
    });
    dialogRefModify.afterClosed().subscribe((result: User) => {
      if (result) {
        this.accountApiService.modifyUser(result).subscribe((ret) => {
          this.user = result;
        });
      }
    });
  }

}
