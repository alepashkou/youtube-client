import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { youtubeData } from 'src/app/shared/mock/youtubeData';

import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  data: SearchItem[] = [];

  search: string = '';

  filter: string = '';

  sort: string = '';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.data = youtubeData.items;
    this.search = this.headerService.search;
    this.filter = this.headerService.filter;
    this.sort = this.headerService.sort;
  }
}
