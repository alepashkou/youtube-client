import { SearchItem } from '../../youtube/models/card-item.model';

export const initialState: AllYoutubeData = {
  customItems: [],
  searchItems: [],
  filter: '',
  sorting: '',
  search: '',
  loading: false,
};

export interface AllYoutubeData {
  customItems: CustomItem[],
  searchItems: SearchItem[],
  filter: string,
  sorting: string,
  search: string,
  error?: Error,
  loading: boolean,
}

export interface CustomItem {
  title: string,
  discription: string,
  img: string,
  video: string,
  date: string,
}
