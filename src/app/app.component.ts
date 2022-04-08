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

  changeSearch(event:string):void {
    this.search = event;
  }

  changeDisplay(event:boolean):void {
    this.filterDisplay = event;
  }

  changeFilter(event:string):void {
    this.filter = event;
  }

  changeSort(event:string):void {
    this.sorting = event;
  }
}
