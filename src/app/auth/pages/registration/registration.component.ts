import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private route:Router) {}

  public clickToLogin(event: Event) {
    event.stopPropagation();
    this.route.navigate(['auth', 'login']);
  }
}
