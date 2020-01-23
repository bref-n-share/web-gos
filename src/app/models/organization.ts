import {Site} from './Site';

export interface Organization {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  status: string;
  phone: string;
  sites?: Site[];
  description?: string;
}
