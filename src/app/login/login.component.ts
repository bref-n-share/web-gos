import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  loginInfos = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  login() {
    this.userService.user = {
      username: this.loginInfos.username,
      password: this.loginInfos.password,
    };
    this.router.navigate(['']);
  }
}
