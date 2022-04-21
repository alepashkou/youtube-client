import { SearchItem } from '../youtube/models/search-item.model';

export const initialState:AllYoutubeData = {
  customItems: [],
  searchItems: [],
};

export interface AllYoutubeData {
  customItems: CustomItem[],
  searchItems: SearchItem[],
}

export interface CustomItem {
  title: string,
  discription: string,
  img: string,
  video: string,
  date: string,
}
