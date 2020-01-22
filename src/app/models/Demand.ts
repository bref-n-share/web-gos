import {Category} from './Category';
import {Site} from './Site';
import {Comment} from './Comment';

export interface Demand {
  id: string;
  title: string;
  author?: string;
  type?: string;
  img?: string;
  description: string;
  category?: Category;
  requestedQuantity: number;
  currentQuantity: number;
  comments?: Comment[];
  site?: Site;
  channel?: Array<object>;
}
