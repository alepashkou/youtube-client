import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginData:Login;

  public simpleToken: string;

  constructor(public route:Router, public authService: AuthService) {
    this.loginData = {
      login: '',
      password: '',
    };
    this.simpleToken = 'ggggggGGGggGGksdfjndndfjklnhjibnvgdjdlkgmnh;dgkfjhioptuy';
  }

  clickToReg(event: Event) {
    event.stopPropagation();
    this.route.navigate(['auth', 'registration']);
  }

  clickToLogin(event: Event) {
    event.stopPropagation();
    this.authService.logIn(this.loginData.login, this.simpleToken);
    this.route.navigate(['']);
  }
}
