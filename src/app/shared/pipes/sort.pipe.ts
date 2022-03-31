import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Pipe({
  name: 'sortPipe',
})
export class SortPipe implements PipeTransform {
  sortered: SearchItem[] = [];

  transform(list:SearchItem[], sort:string = ''): SearchItem[] {
    if (sort === '') {
      return list;
    }
    if (sort === 'date' || sort === '-date') {
      this.sortered = list?.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
      if (sort === '-date') {
        this.sortered.reverse();
      }
    }
    if (sort === 'view' || sort === '-view') {
      this.sortered = list?.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
      if (sort === '-view') {
        this.sortered.reverse();
      }
    }
    return this.sortered;
  }
}
