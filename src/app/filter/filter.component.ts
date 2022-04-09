import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() sortChangeBy = new EventEmitter<string>();

  @Output() filterChangeBy = new EventEmitter<string>();

  sorting: string = '';

  filter: string = '';

  changeSortingDate() {
    if (this.sorting === 'date') {
      this.sorting = '-date';
      this.sortChangeBy.emit(this.sorting);
    } else {
      this.sorting = 'date';
      this.sortChangeBy.emit(this.sorting);
    }
  }

  generateArrowStyle(sortType:string) {
    return { upArrow: this.sorting === sortType, downArrow: this.sorting === `-${sortType}` };
  }

  changeSortingViews() {
    if (this.sorting === 'views') {
      this.sorting = '-views';
      this.sortChangeBy.emit(this.sorting);
    } else {
      this.sorting = 'views';
      this.sortChangeBy.emit(this.sorting);
    }
  }

  changeFilter(event: Event) {
    this.filter = (<HTMLInputElement>event.target).value;
    this.filterChangeBy.emit(this.filter);
  }
}
