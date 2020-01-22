import {User} from './User';

export interface Comment {
  post: string;
  member: User;
  description: string;
}
