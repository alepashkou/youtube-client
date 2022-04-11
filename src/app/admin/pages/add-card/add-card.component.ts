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

  private readonly urlRegex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  private readonly currentDate: number = Date.now();

  constructor(private router: Router) {
    this.addCardForm = new FormGroup({
      title: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      discription: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.pattern(this.urlRegex)]),
      video: new FormControl('', [Validators.pattern(this.urlRegex)]),
      date: new FormControl('', [this.checkDate()]),
    });
  }

  private checkDate():ValidatorFn {
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

  public onSubmit() {
    this.router.navigate(['']);
  }
}
