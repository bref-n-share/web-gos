import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
      private router: Router,
      private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public resetUser() {
    this.currentUserSubject.next(null);
  }

  public get user(): User {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.apiUrl}/security/authenticate`, {email: username, password})
        .subscribe(token => {
            console.log(token);
            localStorage.setItem('token', token.token);
            this.http.get<any>(`${environment.apiUrl}/user/account`)
              .subscribe(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                resolve();
              });
          }, (error) => {
            reject();
          }
        );
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
