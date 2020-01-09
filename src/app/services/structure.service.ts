import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Structure} from '../models/Structure';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(
    private http: HttpClient
  ) { }

  getStructures(): Observable<Structure[]> {
    return this.http.get<Structure[]>(`${environment.apiUrl}/structure`);
  }
}
