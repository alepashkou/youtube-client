import {
  Component,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, filter, Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { changeSearch } from 'src/app/redux/actions/data.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sortingDisplay = false;

  public search: FormControl = new FormControl('', Validators.minLength(3));

  constructor(
    private route: Router,
    private userService: UserService,
    private store: Store,
  ) {
    this.search.valueChanges.pipe(
      debounceTime(400),
      filter((value: string) => (value.length > 3)),
    )
      .subscribe((query) => {
        this.goToMain();
        this.store.dispatch(changeSearch({ search: query }));
      });
  }

  public checkIsAuth():Observable<Boolean> {
    return this.userService.isAuth();
  }

  public checkLoginName():Observable<string> | undefined {
    return this.userService.loginName$;
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
