import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Demand} from '../models/Demand';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  demandsBS = new BehaviorSubject<Array<Demand>>([]);
  allDemands = [];

  constructor(
    private http: HttpClient
  ) { }

  createRequest(payload) {
    return this.http.post(`${environment.apiUrl}/post/request`, payload);
  }

  getRequests() {
    return this.http.get(`${environment.apiUrl}/post/request`).pipe(map((demands: Array<any>) => this.allDemands = demands));
  }
}
