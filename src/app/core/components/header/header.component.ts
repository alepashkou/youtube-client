import {
  Component,
} from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingDisplay = false;

  constructor(private headerService: HeaderService) {}

  changeSearch(value:string) {
    this.headerService.search = value;
  }

  changeSortingDisplay() {
    this.sortingDisplay = !this.sortingDisplay;
  }
}
