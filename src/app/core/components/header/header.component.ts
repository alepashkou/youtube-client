import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sortingDisplay = false;

  constructor(private searchService:SearchService, private route: Router, public userService:UserService) {}

  public changeSearch(value:string):void {
    this.route.navigate(['']);
    this.searchService.changeSearch(value);
    this.goToMain();
  }

  public changeSortingDisplay():void {
    this.sortingDisplay = !this.sortingDisplay;
  }

  public goToMain():void {
    this.route.navigate(['']);
  }

  public clickExit():void {
    this.userService.logOut();
    this.route.navigate(['auth', 'login']);
  }

  public clickAdd():void {
    this.route.navigate(['admin', 'add']);
  }
}
