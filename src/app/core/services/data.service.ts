import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable, map, mergeMap, retry,
} from 'rxjs';
import { SearchItem } from '../../youtube/models/card-item.model';
import { SearchResponse } from '../../youtube/models/search-response.model';
import { VideoItem } from '../../youtube/models/video-response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http:HttpClient) {
  }

  public getDataList(search:string) {
    return this.http.get<SearchItem>(`search?q=${search}`)
      .pipe(
        retry(2),
        map((response) => response.items.map((el:VideoItem) => el.id.videoId)),
        mergeMap((value) => {
          const list = value.join(',');
          return this.http.get<SearchResponse>(`videos?id=${list}&part=statistics`);
        }),
      );
  }

  public getDataItem(id:string):Observable<SearchItem> {
    return this.http.get<SearchResponse>(`videos?id=${id}&part=statistics`)
      .pipe(
        map((response) => response.items[0]),
      );
  }
}
