import {
  Component,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { DataService } from 'src/app/youtube/services/data.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sortingDisplay = false;

  public search: FormControl = new FormControl('', Validators.minLength(3));

  constructor(
    private searchService :SearchService,
    private route: Router,
    public userService: UserService,
    private data: DataService,
  ) {
    this.search.valueChanges.pipe(
      debounceTime(400),
      filter((value: string) => (value.length > 3)),
    )
      .subscribe((query) => {
        this.goToMain();
        this.data.getDataList(query);
        this.searchService.changeSearch(query);
      });
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
