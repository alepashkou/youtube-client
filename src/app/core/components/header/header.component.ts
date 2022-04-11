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
  public sortingDisplay = false;

  constructor(private headerService:HeaderService, private route: Router, public authService:AuthService) {}

  public changeSearch(value:string):void {
    this.route.navigate(['']);
    this.headerService.changeSearch(value);
    this.goToMain();
  }

  public changeSortingDisplay():void {
    this.sortingDisplay = !this.sortingDisplay;
  }

  public goToMain():void {
    this.route.navigate(['']);
  }

  public clickExit():void {
    this.authService.logOut();
    this.route.navigate(['auth', 'login']);
  }

  public clickAdd():void {
    this.route.navigate(['admin', 'add']);
  }
}
