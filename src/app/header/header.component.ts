import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchChangeBy = new EventEmitter<string>();

  @Output() sortingChangeBy = new EventEmitter<boolean>();

  sortingDisplay = false;

  changeSearch(value:string):void {
    this.searchChangeBy.emit(value);
  }

  changeSortingDisplay():void {
    this.sortingDisplay = !this.sortingDisplay;
    this.sortingChangeBy.emit(this.sortingDisplay);
  }
}
