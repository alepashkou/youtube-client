import { SearchItem } from './card-item.model';

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
