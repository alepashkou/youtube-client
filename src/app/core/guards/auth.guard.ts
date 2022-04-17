import { Injectable } from '@angular/core';
import {
  CanLoad, Router,
} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private userService: UserService, public router: Router) {}

  canLoad(): Promise<boolean> {
    return this.userService.isAuth().then((data) => {
      if (data) {
        return true;
      }
      this.router.navigate(['auth', 'login']);
      return false;
    });
  }
}
