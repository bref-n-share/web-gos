import {Organization} from './organization';

export interface Site {
  id: string;
  latitude: string;
  longitude: string;
  post: any[];
  name: string;
  address: string;
  postalCode: string;
  city: string;
  status: string;
  phone: string;
  organization: Organization;
}
