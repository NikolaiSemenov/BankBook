import { Film } from './film.model';
export interface Films {
  page: number;
  results: Film[];
  total_results: number;
  total_pages: number;
  cols?: number;
  rows?: number;
}
