import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  form:FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(''),
      discription: new FormControl(''),
      img: new FormControl(''),
      linkVideo: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('submit', this.form);
  }
}
