import { Component } from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  public addCardForm: FormGroup;

  public urlRegex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  public currentDate: number = Date.now();

  constructor(public router: Router) {
    this.addCardForm = new FormGroup({
      title: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      discription: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.pattern(this.urlRegex)]),
      video: new FormControl('', [Validators.pattern(this.urlRegex)]),
      date: new FormControl('', [this.checkDate()]),
    });
  }

  checkDate():ValidatorFn {
    return (control: AbstractControl):ValidationErrors | null => {
      if (control.value instanceof Date) {
        const pickDate = control.value.getTime();
        if (this.currentDate > pickDate) {
          return { dateErr: true };
        }
      }
      return null;
    };
  }

  onSubmit() {
    this.router.navigate(['']);
  }
}
