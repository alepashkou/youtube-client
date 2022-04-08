import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Pipe({
  name: 'sortingPipe',
})
export class SortingPipe implements PipeTransform {
  sortered: SearchItem[] = [];

  transform(list:SearchItem[], sort:string = ''): SearchItem[] {
    if (sort === '') {
      return list;
    }
    if (sort === 'views' || sort === '-views') {
      this.sortered = list?.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
      if (sort === '-views') {
        this.sortered.reverse();
      }
    }
    if (sort === 'date' || sort === '-date') {
      this.sortered = list?.sort((a, b) => {
        const firstDate = new Date(a.snippet.publishedAt).getTime();
        const secondDate = new Date(b.snippet.publishedAt).getTime();
        return firstDate - secondDate;
      });
      if (sort === '-date') {
        this.sortered.reverse();
      }
    }
    return this.sortered;
  }
}
