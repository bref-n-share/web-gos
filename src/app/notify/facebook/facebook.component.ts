import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {NotifyService} from '../../services/notify.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(
    private notifyService: NotifyService,
    private snackBarService: MatSnackBar
  ) { }

  posting = false;
  postModel = '';

  ngOnInit() {
  }

  createPost(message) {
    this.posting = true;
    this.notifyService.createPost('facebook', message).subscribe(() => {
      this.posting = false;
      this.postModel = '';
    });
  }

}
