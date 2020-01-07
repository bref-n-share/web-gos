import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  openSidevav() {
    this.sidenav.toggle();
  }

  logout() {
    this.userService.logout();
  }

}
