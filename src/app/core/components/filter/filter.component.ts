import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateFilter, updateSorting } from 'src/app/redux/actions/youtube.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public sorting: string = '';

  public filter: string = '';

  constructor(private store: Store) {}

  public generateArrowStyle(sortType:string) {
    return { upArrow: this.sorting === sortType, downArrow: this.sorting === `-${sortType}` };
  }

  public changeSortingDate() {
    if (this.sorting === 'date') {
      this.sorting = '-date';
    } else {
      this.sorting = 'date';
    }
    this.store.dispatch(updateSorting({ sorting: this.sorting }));
  }

  public changeSortingViews() {
    if (this.sorting === 'views') {
      this.sorting = '-views';
    } else {
      this.sorting = 'views';
    }
    this.store.dispatch(updateSorting({ sorting: this.sorting }));
  }

  public changeFilter(event: Event) {
    this.filter = (<HTMLInputElement>event.target).value;
    this.store.dispatch(updateFilter({ filter: this.filter }));
  }
}
