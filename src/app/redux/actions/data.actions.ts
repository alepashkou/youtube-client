import { props, createAction } from '@ngrx/store';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { CustomItem } from '../state.models';

export const ADD_CUSTOM = '[CUSTOM] ADD CUSTOM CARD';
export const CHANGE_SEARCH = '[SEARCH] CHANGE SEARCH CARDS';

export const addCustomItem = createAction(ADD_CUSTOM, props<{ item: CustomItem }>());
export const changeSearchItems = createAction(CHANGE_SEARCH, props<{ items: SearchItem[] }>());
