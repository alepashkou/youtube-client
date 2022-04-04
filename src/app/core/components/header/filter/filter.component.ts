import { Component } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  sorting:string = '';

  filter:string = '';

  constructor(private headerService: HeaderService) {}

  changeSortingDate() {
    if (this.sorting === 'date') {
      this.sorting = '-date';
    } else {
      this.sorting = 'date';
    }
    this.headerService.changeSort(this.sorting);
  }

  changeSortingViews() {
    if (this.sorting === 'views') {
      this.sorting = '-views';
    } else {
      this.sorting = 'views';
    }
    this.headerService.changeSort(this.sorting);
  }

  changeFilter(event: Event) {
    this.filter = (<HTMLInputElement>event.target).value;
    this.headerService.changeFilter(this.filter);
  }
}
