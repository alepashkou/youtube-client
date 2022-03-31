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

  sortingDisplay = false;

  changeSearch(value:string) {
    this.SearchEvent.emit(value);
  }
}
