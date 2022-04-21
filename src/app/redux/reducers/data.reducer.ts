import { createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/data.actions';
import { AllYoutubeData, initialState } from '../state.models';

export const dataReducer = createReducer(
  initialState,
  on(TaskActions.addCustomItem, (state, { item }):AllYoutubeData => ({ ...state, customItems: [...state.customItems, item] })),
  on(TaskActions.changeSearchItems, (state, { items }):AllYoutubeData => ({ ...state, searchItems: items })),
);
