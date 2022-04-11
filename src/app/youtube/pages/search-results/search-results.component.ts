import {
  Component,
  OnInit,
} from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
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

  constructor(public headerService: HeaderService, private dataService: DataService) {
    this.headerService.sorting$.subscribe((value) => this.sort = value);
    this.headerService.filter$.subscribe((value) => this.filter = value);
  }

  ngOnInit(): void {
    this.dataService.data$.subscribe((items) => this.data = items);
  }
}
