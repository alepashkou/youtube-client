import { Injectable } from '@angular/core';
import {
  CanLoad, Router,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanLoad {
  constructor(private auth: UserService, public router: Router) {}

  canLoad(): Observable<boolean> {
    return this.auth.isAuth().pipe(
      map((value) => {
        if (value) {
          this.router.navigate(['']);
          return false;
        }
        return true;
      }),
    );
  }
}
