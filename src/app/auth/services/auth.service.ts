import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged = false;

  public loginName$?: Observable<string>;

  private loginName$$ = new BehaviorSubject('');

  constructor() {
    this.isLogged = !!localStorage.getItem('auth');
    this.loginName$ = this.loginName$$.asObservable();
    if (this.isLogged) {
      this.setName();
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
    this.setName();
  }

  logOut():void {
    localStorage.removeItem('auth');
    this.isLogged = false;
  }

  setName():void {
    const data = localStorage.getItem('auth') as string;
    this.loginName$$.next(JSON.parse(data).login);
  }
}
