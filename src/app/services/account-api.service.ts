import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {environment} from '../../environments/environment';
import {Structure} from '../models/Structure';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  public loading = false;
  constructor(private http: HttpClient) {
  }

  getUserById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/user/member/${id}`);
  }

  createUser(user: object) {
    this.loading = true;
    return this.http.post<User>(`${environment.apiUrl}/user/member`, user).pipe(map(() => this.loading = false));
  }

  modifyUser(user: User) {
    return this.http.patch<User>(`${environment.apiUrl}/user/${user.id}`, {lastName: user.lastName, firstName: user.firstName});
  }

  deleteUSer(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/member/${id}`);
  }
}
