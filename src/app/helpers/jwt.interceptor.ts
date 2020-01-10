import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    console.log(`${localStorage.getItem('token')}`);
    if (localStorage.getItem('token') && request.url !== `${environment.apiUrl}/security/authenticate`) {
      request = request.clone({
        setHeaders: {
          'X-AUTH-TOKEN': `${localStorage.getItem('token')}`
        }
      });
    }
    return next.handle(request);
  }
}
