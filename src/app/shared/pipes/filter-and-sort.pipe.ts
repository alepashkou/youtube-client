import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Pipe({
  name: 'filterAndSort',
})
export class FilterAndSortPipe implements PipeTransform {
  filtered:SearchItem[] = [];

  transform(list:SearchItem[], search:string = ''): SearchItem[] {
    this.filtered = list.filter((el) => el.snippet.title.includes(search) && search !== '');
    return this.filtered;
  }
}
