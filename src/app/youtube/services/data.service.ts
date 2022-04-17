import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable, map, mergeMap, BehaviorSubject,
} from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';
import { VideoItem } from '../models/video-response';

@Injectable()
export class DataService {
  public data$: Observable<SearchItem[]>;

  private data$$ = new BehaviorSubject([]);

  constructor(public http:HttpClient) {
    this.data$ = this.data$$.asObservable();
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
