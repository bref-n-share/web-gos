import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(
    private http: HttpClient
  ) { }

  publish(channel, postId) {
    return this.http.post(`${environment.apiUrl}/post/publish/${postId}`, {channels: [channel]});
  }
}
