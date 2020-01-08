import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = null;

  constructor(
      private router: Router
  ) { }

  logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }
}
