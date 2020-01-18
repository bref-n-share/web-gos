import {Category} from './Category';

export interface Demand {
  title: string;
  author?: string;
  img?: string;
  description: string;
  category?: Category;
  requestedQuantity: number;
  currentQuantity: number;
  comments?: Comment[];
  site?: object;
  channel?: Array<object>;
}
