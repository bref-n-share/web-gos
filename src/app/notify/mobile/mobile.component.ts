import {Component, OnInit} from '@angular/core';
import {NotifyService} from '../../services/notify.service';
import {DateAdapter, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(
    private notifyService: NotifyService,
    private adapter: DateAdapter<any>,
    private fb: FormBuilder,
    private userService: UserService,
    private snackBarService: MatSnackBar
  ) {
  }

  postForm: FormGroup;
  posting = false;

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', [Validators.required]]
    });
  }

  createPost() {
    this.posting = true;
    const model = {
      title: this.postForm.value.title,
      description: this.postForm.value.message,
      expirationDate: this.createExpirationDate(this.postForm.value.date, this.postForm.value.time),
      site: this.userService.user.structure.id
    };
    this.notifyService.notify(model, null).subscribe(returned => {
      console.log('value returned', returned);
      this.posting = false;
      this.snackBarService.open('Message envoyé', null, {
        duration: 2000,
      });
    }, error => {
      console.error('error', error);
      this.snackBarService.open('Erreur l\'envoi : ' + error.statusText, null, {
        duration: 2000,
      });
    });
  }

  createExpirationDate(date, time) {
    return `${date.format('YYYY-MM-DD')}T${time}:00.000z`;
  }

}
