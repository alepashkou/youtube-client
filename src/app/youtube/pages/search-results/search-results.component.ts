import {
  Component,
  OnInit,
} from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';
import { SearchItem } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public data: SearchItem[] = [];

  public filter: string = '';

  public sort: string = '';

  public search: string = '';

  constructor(private searchService: SearchService, private dataService: DataService) {
    this.searchService.sorting$.subscribe((value) => this.sort = value);
    this.searchService.filter$.subscribe((value) => this.filter = value);
    this.searchService.search$.subscribe((value) => this.search = value);
  }

  ngOnInit(): void {
    this.dataService.data$.subscribe((items) => this.data = items);
  }
}
