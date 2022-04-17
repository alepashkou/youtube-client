import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public search$: Observable<string>;

  private search$$ = new BehaviorSubject('');

  public sorting$: Observable<string>;

  private sorting$$ = new BehaviorSubject('');

  public filter$: Observable<string>;

  private filter$$ = new BehaviorSubject('');

  constructor() {
    this.search$ = this.search$$.asObservable();
    this.sorting$ = this.sorting$$.asObservable();
    this.filter$ = this.filter$$.asObservable();
  }

  changeSearch(value:string):void {
    this.search$$.next(value);
  }

  changeSorting(value:string):void {
    this.sorting$$.next(value);
  }

  changeFilter(value:string):void {
    this.filter$$.next(value);
  }
}
