import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() SortEvent = new EventEmitter<string>();

  @Output() FilterEvent = new EventEmitter<string>();

  sorting: string = '';

  filter: string = '';

  changeSortingDate() {
    if (this.sorting === 'date') {
      this.sorting = '-date';
      this.SortEvent.emit(this.sorting);
    } else {
      this.sorting = 'date';
      this.SortEvent.emit(this.sorting);
    }
  }

  changeSortingViews() {
    if (this.sorting === 'views') {
      this.sorting = '-views';
      this.SortEvent.emit(this.sorting);
    } else {
      this.sorting = 'views';
      this.SortEvent.emit(this.sorting);
    }
  }

  changeFilter(event: Event) {
    this.filter = (<HTMLInputElement>event.target).value;
    this.FilterEvent.emit(this.filter);
  }
}
