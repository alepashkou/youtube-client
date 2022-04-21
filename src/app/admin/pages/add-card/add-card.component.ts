import { Component } from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { addCustomItem } from 'src/app/redux/actions/data.actions';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent {
  public addCardForm: FormGroup;

  private readonly urlRegex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  private readonly currentDate: number = Date.now();

  constructor(private router: Router, private store: Store) {
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
    this.store.dispatch(addCustomItem({ item: this.addCardForm.value }));
    this.router.navigate(['']);
  }
}
