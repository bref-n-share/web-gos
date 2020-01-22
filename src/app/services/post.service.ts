import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Demand} from '../models/Demand';
import {map} from 'rxjs/operators';
import {DemandsService} from './demands.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private demandsService: DemandsService
  ) { }

  getPosts() {
    return this.http.get(`${environment.apiUrl}/post?level=full&channels=gos`).pipe(map((posts: Demand[]) => this.demandsService.allDemands = posts));
  }

  setComment(id: string, description: string) {
    return this.http.post(`${environment.apiUrl}/post/${id}/comment`, {description: description});
  }
}
