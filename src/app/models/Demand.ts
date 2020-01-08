export interface Demand {
  title: string,
  author: string;
  img: string;
  description: string;
  categories: string[];
  qtyAsked: number;
  qtyFetched: number;
  comments: Comment[];
}
