import { props, createAction } from '@ngrx/store';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { CustomItem } from '../state.models';

export const ADD_CUSTOM_CARD = 'ADD CUSTOM CARD';
export const CHANGE_YOUTUBE_CARD = 'CHANGE YOUTUBE CARDS';
export const CHANGE_FILTER = 'CHANGE FILTER';
export const CHANGE_SEARCH = 'CHANGE SEARCH';
export const CHANGE_SORTING = 'CHANGE SORTING';

export const addCustomItem = createAction(ADD_CUSTOM_CARD, props<{ item: CustomItem }>());
export const changeSearchItems = createAction(CHANGE_YOUTUBE_CARD, props<{ items: SearchItem[] }>());
export const changeFilter = createAction(CHANGE_FILTER, props<{ filter: string }>());
export const changeSearch = createAction(CHANGE_SEARCH, props<{ search: string }>());
export const changeSorting = createAction(CHANGE_SORTING, props<{ sorting: string }>());
