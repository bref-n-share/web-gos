import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material';
import {map} from 'rxjs/operators';
import {isNull} from 'util';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private http: HttpClient,
    private snackBarService: MatSnackBar
  ) {
  }

  publish(channel, message) {
    return this.http.post(`${environment.apiUrl}/notification/publish`, {channels: [channel], message});
  }

  createPost(channel, message) {
    return this.publish(channel, message).pipe(map(value => {
        this.snackBarService.open('Post créé', null, {
          duration: 2000,
        });
        return value;
      },
      error => {
        console.error('error', error);
        this.snackBarService.open('Une erreur a eu lieu, voir la console', null, {
          duration: 2000,
        });
        return error;
      }));
  }

  notify(payload, postId) {
    if (isNull(postId)) {
      return this.http.post(`${environment.apiUrl}/notification/simple`, payload);
    } else {
      return this.http.post(`${environment.apiUrl}/notification/post/${postId}`, payload);
    }
  }


}
