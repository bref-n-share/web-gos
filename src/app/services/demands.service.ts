import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  demandsBS = new BehaviorSubject([]);
  allDemands = [];

  constructor(
    private http: HttpClient
  ) { }

  createRequest(payload) {
    return this.http.post(`${environment.apiUrl}/post/request`, payload);
  }
}
