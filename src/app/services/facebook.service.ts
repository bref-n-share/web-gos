import { Injectable } from '@angular/core';
import secrets from '../../environments/secrets.json';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'https://graph.facebook.com/v5.0';
  accessToken = secrets.facebookApiKey;


  createPost(message): Observable<any> {
    const url = this.baseUrl + `/feed?message=${message}&access_token=${this.accessToken}`;
    return this.http.post(url, null);
  }
}
