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

  sorting: string = '';

  filter: string = '';

  changeSearch(value:string):void {
    this.search = value;
  }

  changeDisplay(visible:boolean):void {
    this.filterDisplay = visible;
  }

  changeFilter(value:string):void {
    this.filter = value;
  }

  changeSort(value:string):void {
    this.sorting = value;
  }
}
