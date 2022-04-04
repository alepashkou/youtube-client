import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public search$: Observable<string>;

  private search$$ = new BehaviorSubject('');

  public sort$: Observable<string>;

  private sort$$ = new BehaviorSubject('');

  public filter$: Observable<string>;

  private filter$$ = new BehaviorSubject('');

  constructor() {
    this.search$ = this.search$$.asObservable();
    this.sort$ = this.sort$$.asObservable();
    this.filter$ = this.filter$$.asObservable();
  }

  changeSearch(value:string):void {
    this.search$$.next(value);
  }

  changeSort(value:string):void {
    this.sort$$.next(value);
  }

  changeFilter(value:string):void {
    this.filter$$.next(value);
  }
}
