import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  filtered: SearchItem[] = [];

  transform(list?:SearchItem[], filter:string = ''): SearchItem[] {
    if (list) {
      this.filtered = list?.filter((el) => el.snippet.title.includes(filter));
    }

    return this.filtered;
  }
}
