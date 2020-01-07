import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BecomeMember, CreateOrganization, CreateSite} from '../models/commands/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupCommandsService {

  commandController = new BehaviorSubject<BecomeMember|CreateSite|CreateOrganization>(null);

  constructor() { }
}
