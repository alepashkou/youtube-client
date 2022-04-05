import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged = false;

  constructor() {
    this.isLogged = !!localStorage.getItem('auth');
  }

  isAuth() {
    return new Promise((resolve) => {
      resolve(this.isLogged);
    });
  }

  logIn() {
    localStorage.setItem('auth', '1');
    this.isLogged = true;
  }

  logOut() {
    localStorage.removeItem('auth');
    this.isLogged = false;
  }
}
