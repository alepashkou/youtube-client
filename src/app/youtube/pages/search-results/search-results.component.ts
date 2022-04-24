import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { SearchItem } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public data: SearchItem[] = [];

  public filter: string = '';

  public sort: string = '';

  public search: string = '';

  subscriptions: Subscription = new Subscription();

  constructor(private searchService: SearchService, private dataService: DataService) {
    this.subscriptions.add(this.searchService.sorting$.subscribe((value) => this.sort = value));
    this.subscriptions.add(this.searchService.filter$.subscribe((value) => this.filter = value));
    this.subscriptions.add(this.searchService.search$.subscribe((value) => this.search = value));
  }

  ngOnInit(): void {
    this.dataService.data$.subscribe((items) => this.data = items);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
