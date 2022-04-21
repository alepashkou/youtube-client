import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable, map, mergeMap, BehaviorSubject,
} from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { Store } from '@ngrx/store';
import { changeSearchItems } from 'src/app/redux/actions/data.actions';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';
import { VideoItem } from '../models/video-response';

@Injectable()
export class DataService {
  public data$: Observable<SearchItem[]>;

  private data$$ = new BehaviorSubject([]);

  constructor(private http:HttpClient, private searchService: SearchService, private store: Store) {
    this.data$ = this.data$$.asObservable();
    this.searchService.search$.subscribe((value) => this.getDataList(value));
  }

  public getDataList(search:string): void {
    this.http.get<SearchItem>(`search?q=${search}`)
      .pipe(
        map((response) => response.items.map((el:VideoItem) => el.id.videoId)),
        mergeMap((value) => {
          const list = value.join(',');
          return this.http.get<SearchItem>(`videos?id=${list}&part=statistics`);
        }),
      ).subscribe((value) => {
        this.store.dispatch(changeSearchItems({ items: value.items }));
        this.data$$.next(value.items);
      });
  }

  public getDataItem(id:string):Observable<SearchItem> {
    return this.http.get<SearchResponse>(`videos?id=${id}&part=statistics`)
      .pipe(
        map((response) => response.items[0]),
      );
  }
}
