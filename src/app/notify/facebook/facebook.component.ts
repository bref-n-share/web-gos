import { Component, OnInit } from '@angular/core';
import {FacebookService} from '../../services/facebook.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(
    private facebookService: FacebookService,
    private snackBarService: MatSnackBar
  ) { }

  posting = false;
  postModel = '';

  ngOnInit() {
  }

  createPost(message) {
    this.posting = true;
    this.facebookService.createPost(message).subscribe(value => {
      this.posting = false;
      this.postModel = '';
      this.snackBarService.open('Post créé', null, {
        duration: 2000,
      });
    }, error => {
      console.error('error', error);
      this.posting = false;
      this.postModel = '';
      this.snackBarService.open('Une erreur a eu lieu, voir la console', null, {
        duration: 2000,
      });
    });
  }

}
