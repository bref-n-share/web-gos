import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Demand} from '../models/Demand';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  demandsBS = new BehaviorSubject<Array<Demand>>([]);
  allDemands = [];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  createRequest(payload) {
    return this.http.post(`${environment.apiUrl}/post/request`, payload);
  }

  getRequests() {
    return this.http.get(`${environment.apiUrl}/post/request`).pipe(map((demands: Array<any>) => this.allDemands = demands));
  }

  getMyRequests() {
    return this.http.get(`${environment.apiUrl}/post/request?site=${this.userService.user.structure.id}`).pipe(map((demands: Array<any>) => this.allDemands = demands));
  }

  editRequest(payload, requestId) {
    return this.http.patch(`${environment.apiUrl}/post/request/${requestId}`, payload);
  }

  getRequest(requestId) {
    return this.http.get(`${environment.apiUrl}/post/request/${requestId}`);
  }

  donate(requestId) {
    return this.http.post(`${environment.apiUrl}/post/request/${requestId}`, null);
  }
}
