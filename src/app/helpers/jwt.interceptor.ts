import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  whiteList = [
    `${environment.apiUrl}/security/authenticate`,
    `${environment.apiUrl}/user/member`,
    `${environment.apiUrl}/structure`
  ];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (localStorage.getItem('token') && !this.whiteList.includes(request.url)) {
      request = request.clone({
        setHeaders: {
          'X-AUTH-TOKEN': `${localStorage.getItem('token')}`
        }
      });
    }
    return next.handle(request);
  }
}
