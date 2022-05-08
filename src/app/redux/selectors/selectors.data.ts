import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AllYoutubeData } from '../state.models';

const selectState = createFeatureSelector<AllYoutubeData>('data');

export const selectData = createSelector(
  selectState,
  (state) => state,
);
export const selectDataSearch = createSelector(
  selectState,
  (state) => state.search,
);
export const selectDataFilter = createSelector(
  selectState,
  (state) => state.filter,
);
export const selectDataSorting = createSelector(
  selectState,
  (state) => state.sorting,
);
export const selectDataSearchItems = createSelector(
  selectState,
  (state) => state.searchItems,
);
