import { props, createAction } from '@ngrx/store';
import { SearchItem } from 'src/app/youtube/models/card-item.model';
import { CustomItem } from '../models/youtube.model';

const NAMESPACE = '[YOUTUBE]';

export const addCustomItem = createAction(`${NAMESPACE} Add Custom Item`, props<{ item: CustomItem }>());
export const loadSearchItems = createAction(`${NAMESPACE} Load Data`, props<{ search: string }>());
export const loadSearchItemsSuccess = createAction(`${NAMESPACE} Load Data SUCCESS`, props<{ items: SearchItem[] }>());
export const loadSearchItemsFail = createAction(`${NAMESPACE} Load Data FAIL`, props<{ error: Error }>());
export const updateFilter = createAction(`${NAMESPACE} Update Filter`, props<{ filter: string }>());
export const updateSorting = createAction(`${NAMESPACE} Update Sorting`, props<{ sorting: string }>());
