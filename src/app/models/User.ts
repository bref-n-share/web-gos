import {Structure} from './Structure';

export interface User {
  id?: number;
  username: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  status?: string;
  structure?: Structure;
  role?: string;
}
