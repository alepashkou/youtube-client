import { Component } from '@angular/core';
import { SearchItem } from './search/search-item.model';
import { youtubeData } from './youtubeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube';

  data: SearchItem[] = youtubeData.items;

  filter: string = '';

  changeFilter(event:string) {
    this.filter = event;
  }
}
