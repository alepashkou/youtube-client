import { Injectable } from '@angular/core';
import {
  CanLoad, Router,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private userService: UserService, public router: Router) {}

  canLoad(): Observable<boolean> {
    return this.userService.isAuth().pipe(
      map((value) => {
        if (value) {
          return true;
        }
        this.router.navigate(['auth', 'login']);
        return false;
      }),
    );
  }
}
