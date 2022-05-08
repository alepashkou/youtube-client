/* eslint-disable ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { changeSearch } from '../actions/data.actions';

@Injectable()
export class ChangeSearchEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
  ) {}

  cahngeData$ = createEffect(() => this.actions$.pipe(
    ofType(changeSearch),
    tap(() => {
      this.dataService.getDataList();
    }),
  ), { dispatch: false });
}
