import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(public route:Router) {}

  ngOnInit(): void {
  }

  clickToLogin(event: Event) {
    event.stopPropagation();
    this.route.navigate(['login']);
  }
}
