import { createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/youtube.action';
import { AllYoutubeData, initialState } from '../models/youtube.model';

export const youtubeReducer = createReducer(
  initialState,
  on(TaskActions.addCustomItem, (state, { item }):AllYoutubeData => ({ ...state, customItems: [...state.customItems, item] })),
  on(TaskActions.loadSearchItems, (state, { search }):AllYoutubeData => ({ ...state, search, loading: true })),
  on(TaskActions.loadSearchItemsSuccess, (state, { items }):AllYoutubeData => ({ ...state, searchItems: items, loading: false })),
  on(TaskActions.loadSearchItemsFail, (state, { error }):AllYoutubeData => ({ ...state, error, loading: false })),
  on(TaskActions.updateFilter, (state, { filter }):AllYoutubeData => ({ ...state, filter })),
  on(TaskActions.updateSorting, (state, { sorting }):AllYoutubeData => ({ ...state, sorting })),
);
