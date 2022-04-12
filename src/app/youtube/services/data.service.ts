import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable, map, mergeMap, Subject,
} from 'rxjs';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data$: Observable<SearchItem[]>;

  private data$$ = new Subject<SearchItem[]>();

  constructor(public http:HttpClient) {
    this.data$ = this.data$$.asObservable();
  }

  public getData(search:string): void {
    const url = `https://youtube.googleapis.com/youtube/v3/search?q=${search}`;
    this.http.get<any>(url)
      .pipe(
        map((response) => response.items.map((el:any) => el.id.videoId)),
        mergeMap((value) => {
          const list = value.join(',');
          return this.http.get<any>(`https://www.googleapis.com/youtube/v3/videos?id=${list}&part=statistics`);
        }),
      ).subscribe((value) => {
        this.data$$.next(value.items);
      });
  }
}
