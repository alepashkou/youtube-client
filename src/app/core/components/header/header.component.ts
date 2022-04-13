import {
  Component,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from 'src/app/youtube/services/data.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sortingDisplay = false;

  public search: FormControl = new FormControl('', Validators.minLength(3));

  constructor(
    private headerService:HeaderService,
    private route: Router,
    public authService: AuthService,
    private data: DataService,
  ) {
    this.search.valueChanges.pipe(
      debounceTime(400),
      filter((value: string) => (value.length > 3)),
    )
      .subscribe((query) => {
        this.goToMain();
        this.data.getDataList(query);
        this.headerService.changeSearch(query);
      });
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
