/* eslint-disable ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, map, mergeMap, of,
} from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';
import { changeSearch, changeSearchItems, haveError } from '../actions/data.actions';

@Injectable()
export class ChangeSearchEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}

  cahngeData$ = createEffect(() => this.actions$.pipe(
    ofType(changeSearch),
    mergeMap((action) => this.dataService.getDataList(action.search).pipe(
      map((data: SearchResponse) => changeSearchItems({ items: data.items })),
      catchError((error: Error) => of(haveError({ error }))),
    )),
  ));
}
