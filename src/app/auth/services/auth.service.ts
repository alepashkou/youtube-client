import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged = false;

  public loginName = '';

  constructor() {
    this.isLogged = !!localStorage.getItem('auth');
    if (this.isLogged) {
      const data = localStorage.getItem('auth') as string;
      this.loginName = JSON.parse(data).login;
    }
  }

  isAuth():Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this.isLogged);
    });
  }

  logIn(login:string, token:string):void {
    const auth = JSON.stringify({ login, token });
    localStorage.setItem('auth', auth);
    this.isLogged = true;
  }

  logOut():void {
    localStorage.removeItem('auth');
    this.isLogged = false;
  }

  getName():string {
    return this.loginName;
  }
}
