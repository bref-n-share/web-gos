import { Component, OnInit } from '@angular/core';
import {NotifyService} from '../../services/notify.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

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
    this.notifyService.createPost('twitter', message).subscribe(() => {
      this.posting = false;
      this.postModel = '';
    });
  }

}
