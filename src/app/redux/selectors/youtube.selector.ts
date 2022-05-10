import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AllYoutubeData } from '../models/youtube.model';

const selectState = createFeatureSelector<AllYoutubeData>('youtube');

export const selectData = createSelector(
  selectState,
  (state) => state,
);
export const selectDataSearch = createSelector(
  selectState,
  (state) => state.search,
);
export const selectDataSearchItems = createSelector(
  selectState,
  (state) => state.searchItems,
);
