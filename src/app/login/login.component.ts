import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  login: FormGroup;

  ngOnInit() {
    this.login = this.formBuilder.group({
      username: ['', Validators.minLength(2)],
      password: ['', Validators.required],
    });
  }

  loginForm(data) {
    if (data.status === 'INVALID') {
      return;
    }
    this.userService.login(data.value.username, data.value.password).then((success) => {
      this.router.navigate(['']);
    }, (err) => {
      this.snackBar.open('Mot de passe ou username incorrect', 'OK', {
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    });
  }
}
