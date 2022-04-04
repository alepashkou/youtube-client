import { SearchItem } from './search-item.model';

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
