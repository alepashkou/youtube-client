import { Component } from '@angular/core';
import { SearchItem } from './search/search-item.model';
import { youtubeData } from './shared/mock/youtubeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube';

  data: SearchItem[] = youtubeData.items;

  search: string = '';

  filterDisplay = false;

  sort:string = '';

  filter:string = '';

  changeSearch(event:string) {
    this.search = event;
  }

  changeDisplay(event:boolean) {
    this.filterDisplay = event;
  }

  changeFilter(event:string) {
    this.filter = event;
  }

  changeSort(event:string) {
    this.sort = event;
  }
}
