import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingDisplay = false;

  constructor(private headerService: HeaderService, public route: Router) {}

  changeSearch(value:string) {
    this.headerService.changeSearch(value);
  }

  changeSortingDisplay() {
    this.sortingDisplay = !this.sortingDisplay;
  }

  goToMain() {
    this.route.navigate(['']);
  }
}
