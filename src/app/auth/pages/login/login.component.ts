import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public route:Router) {}

  ngOnInit(): void {
  }

  clickToReg(event: Event) {
    event.stopPropagation();
    this.route.navigate(['registration']);
  }
}
