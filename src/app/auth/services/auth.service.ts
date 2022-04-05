import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged = false;

  isAuth() {
    return new Promise((resolve) => {
      resolve(this.isLogged);
    });
  }

  logIn() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }
}
