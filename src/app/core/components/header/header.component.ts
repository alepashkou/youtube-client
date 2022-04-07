import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingDisplay = false;

  constructor(private headerService: HeaderService, public route: Router, public authService:AuthService) {}

  changeSearch(value:string):void {
    this.route.navigate(['']);
    this.headerService.changeSearch(value);
  }

  changeSortingDisplay():void {
    this.sortingDisplay = !this.sortingDisplay;
  }

  goToMain():void {
    this.route.navigate(['']);
  }

  clickExit():void {
    this.authService.logOut();
    this.route.navigate(['auth', 'login']);
  }

  clickAdd():void {
    this.route.navigate(['add']);
  }
}
