import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {environment} from '../../environments/environment';
import {Structure} from '../models/Structure';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(private http: HttpClient) {
  }

  private getUserById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/user/member=${id}`);
  }

  createUser(user: object) {
    return this.http.post<User>(`${environment.apiUrl}/user/member`, user);
  }
  getStructures(): Observable<Structure[]> {
    return this.http.get<Structure[]>(`${environment.apiUrl}/structure`);
  }
}
