import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  private simpleToken: string = 'ggggggGGGggGGksdfjndndfjklnhjibnvgdjdlkgmnh;dgkfjhioptuy';

  private readonly s_letters = 'qwertyuiopasdfghjklzxcvbnm';

  private readonly b_letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM';

  private readonly digits = '0123456789';

  private readonly specials = '1!@#$%^&*()_-+=.,:;[]{}';

  constructor(private route:Router, private userService: UserService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.email]),
      password: new FormControl('', [this.checkPassword()]),
    });
  }

  public clickToReg(event: Event) {
    event.stopPropagation();
    this.route.navigate(['auth', 'registration']);
  }

  public onSubmit() {
    this.userService.logIn(this.loginForm.get('login')?.value, this.simpleToken);
    this.route.navigate(['']);
  }

  private checkPassword():ValidatorFn {
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
