import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  public simpleToken: string = 'ggggggGGGggGGksdfjndndfjklnhjibnvgdjdlkgmnh;dgkfjhioptuy';

  s_letters = 'qwertyuiopasdfghjklzxcvbnm';

  b_letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM';

  digits = '0123456789';

  specials = '1!@#$%^&*()_-+=.,:;[]{}';

  constructor(public route:Router, public authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.email]),
      password: new FormControl('', [this.checkPassword()]),
    });
  }

  clickToReg(event: Event) {
    event.stopPropagation();
    this.route.navigate(['auth', 'registration']);
  }

  onSubmit() {
    this.authService.logIn(this.loginForm.get('login')?.value, this.simpleToken);
    this.route.navigate(['']);
  }

  checkPassword():ValidatorFn {
    return (control: AbstractControl):ValidationErrors | null => {
      const password = control.value;
      if (password.length === 0) {
        return null;
      }
      let isSmall = false;
      let isBig = false;
      let isDigits = false;
      let isSpecials = false;
      const isLength = password.length >= 8;
      for (let i = 0; i < password.length; i += 1) {
        if (!isSmall && this.s_letters.indexOf(password[i]) !== -1) isSmall = true;
        else if (!isBig && this.b_letters.indexOf(password[i]) !== -1) isBig = true;
        else if (!isDigits && this.digits.indexOf(password[i]) !== -1) isDigits = true;
        else if (!isSpecials && this.specials.indexOf(password[i]) !== -1) isSpecials = true;
      }
      if (!isSmall || !isBig || !isDigits || !isSpecials || !isLength) {
        return {
          isSmall: !isSmall,
          isBig: !isBig,
          isDigits: !isDigits,
          isSpecials: !isSpecials,
          isLength: !isLength,
        };
      }
      return null;
    };
  }
}
