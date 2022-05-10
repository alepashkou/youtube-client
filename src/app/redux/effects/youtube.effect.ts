/* eslint-disable ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, delay, map, mergeMap, of,
} from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';
import * as fromActions from '../actions';

@Injectable()
export class YoutubeEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}

  loadSearchItems$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadSearchItems),
    mergeMap((action) => this.dataService.getDataList(action.search).pipe(
      delay(1000),
      map((data: SearchResponse) => fromActions.loadSearchItemsSuccess({ items: data.items })),
      catchError((error: Error) => of(fromActions.loadSearchItemsFail({ error }))),
    )),
  ));
}
