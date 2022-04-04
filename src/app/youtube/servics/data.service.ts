import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { youtubeData } from 'src/app/shared/mock/youtubeData';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data$: Observable<SearchItem[]>;

  private data$$ = new BehaviorSubject(youtubeData.items);

  constructor() {
    this.data$ = this.data$$.asObservable();
  }
}
