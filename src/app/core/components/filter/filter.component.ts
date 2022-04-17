import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public sorting: string = '';

  public filter: string = '';

  constructor(private searchService: SearchService) {}

  public generateArrowStyle(sortType:string) {
    return { upArrow: this.sorting === sortType, downArrow: this.sorting === `-${sortType}` };
  }

  public changeSortingDate() {
    if (this.sorting === 'date') {
      this.sorting = '-date';
    } else {
      this.sorting = 'date';
    }
    this.searchService.changeSorting(this.sorting);
  }

  public changeSortingViews() {
    if (this.sorting === 'views') {
      this.sorting = '-views';
    } else {
      this.sorting = 'views';
    }
    this.searchService.changeSorting(this.sorting);
  }

  public changeFilter(event: Event) {
    this.filter = (<HTMLInputElement>event.target).value;
    this.searchService.changeFilter(this.filter);
  }
}
