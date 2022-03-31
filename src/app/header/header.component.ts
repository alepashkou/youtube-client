import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() filterEvent = new EventEmitter<string>();

  sortingDisplay = false;

  changeFilter(value:string) {
    this.filterEvent.emit(value);
  }
}
