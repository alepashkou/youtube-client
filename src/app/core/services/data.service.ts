import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable, map, mergeMap, retry,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { changeSearchItems } from 'src/app/redux/actions/data.actions';
import { selectDataSearch } from 'src/app/redux/selectors/selectors.data';
import { SearchItem } from '../../youtube/models/card-item.model';
import { SearchResponse } from '../../youtube/models/search-response.model';
import { VideoItem } from '../../youtube/models/video-response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private search = this.store.select(selectDataSearch);

  public currentSearch: string;

  constructor(private http:HttpClient, private store: Store) {
    this.search.subscribe((value) => {
      if (value) this.currentSearch = value;
    });
  }

  public getDataList(): void {
    this.http.get<SearchItem>(`search?q=${this.currentSearch}`)
      .pipe(
        retry(2),
        map((response) => response.items.map((el:VideoItem) => el.id.videoId)),
        mergeMap((value) => {
          const list = value.join(',');
          return this.http.get<SearchItem>(`videos?id=${list}&part=statistics`);
        }),
      ).subscribe((value) => {
        this.store.dispatch(changeSearchItems({ items: value.items }));
      });
  }

  public getDataItem(id:string):Observable<SearchItem> {
    return this.http.get<SearchResponse>(`videos?id=${id}&part=statistics`)
      .pipe(
        map((response) => response.items[0]),
      );
  }
}
