import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(public route:Router) {}

  clickToLogin(event: Event) {
    event.stopPropagation();
    this.route.navigate(['auth', 'login']);
  }
}
