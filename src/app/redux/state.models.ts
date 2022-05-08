import { SearchItem } from '../youtube/models/search-item.model';

export const initialState:AllYoutubeData = {
  customItems: [],
  searchItems: [],
  filter: '',
  sorting: '',
  search: '',
};

export interface AllYoutubeData {
  customItems: CustomItem[],
  searchItems: SearchItem[],
  filter: string,
  sorting: string,
  search: string
}

export interface CustomItem {
  title: string,
  discription: string,
  img: string,
  video: string,
  date: string,
}
