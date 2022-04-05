import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public route:Router, public authService: AuthService) {}

  ngOnInit(): void {
  }

  clickToReg(event: Event) {
    event.stopPropagation();
    this.route.navigate(['registration']);
  }

  clickToLogin(event: Event) {
    event.stopPropagation();
    this.authService.logIn();
    this.route.navigate(['']);
  }
}
