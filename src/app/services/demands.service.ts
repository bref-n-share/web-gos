import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  demandsBS = new BehaviorSubject([]);
  allDemands = [];

  constructor() { }
}
