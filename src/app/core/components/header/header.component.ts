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

  constructor(private searchervice:SearchService, public route:Router, public userService:UserService) {}

  changeSearch(value:string):void {
    this.searchervice.changeSearch(value);
    this.goToMain();
  }

  changeSortingDisplay():void {
    this.sortingDisplay = !this.sortingDisplay;
  }

  goToMain():void {
    this.route.navigate(['']);
  }

  clickExit():void {
    this.userService.logOut();
    this.route.navigate(['auth', 'login']);
  }
}
