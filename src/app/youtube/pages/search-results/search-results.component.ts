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
  data: SearchItem[] = [];

  filter: string = '';

  sort: string = '';

  constructor(public headerService: HeaderService, public dataService: DataService) {
    this.headerService.sort$.subscribe((value) => this.sort = value);
    this.headerService.filter$.subscribe((value) => this.filter = value);
  }

  ngOnInit(): void {
    this.dataService.data$.subscribe((items) => this.data = items);
  }
}
