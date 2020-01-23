import {Site} from './Site';

export interface Structure {
  id: string;
  name: string;
  type: string;
  sites?: Site[];
}
