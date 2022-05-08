import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/card-item.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  public filtered: SearchItem[] = [];

  transform(list?:SearchItem[], filter:string = ''): SearchItem[] {
    if (list) {
      const lowerFilter = filter.toLowerCase();
      this.filtered = list?.filter((el) => el.snippet.title.toLowerCase().includes(lowerFilter));
    }

    return this.filtered;
  }
}
