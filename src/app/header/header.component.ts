import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() SearchEvent = new EventEmitter<string>();

  @Output() SortingDisplayEvent = new EventEmitter<boolean>();

  sortingDisplay = false;

  changeSearch(value:string):void {
    this.SearchEvent.emit(value);
  }

  changeSortingDisplay():void {
    this.sortingDisplay = !this.sortingDisplay;
    this.SortingDisplayEvent.emit(this.sortingDisplay);
  }
}
