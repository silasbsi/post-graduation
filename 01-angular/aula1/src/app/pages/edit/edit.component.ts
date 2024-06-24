import { Component, Inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { DOCUMENT, NgIf } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class EditComponent {
  user: User = new User();
  addressForm: any;
  email: any;

  localStorage: any;

  constructor(
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.localStorage = this.document.defaultView?.localStorage;

    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }
    this.addressForm = this.fb.group({
      name: [
        this.user.name,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70),
        ]),
      ],
      email: [this.user.email, Validators.required],
      phone: [this.user.phone, Validators.required],
      password: [null, Validators.required],
    });

    this.email = this.addressForm.controls['email'];
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    return this.email.hasError('email')
      ? 'You need to fill in a valid value for the email'
      : '';
  }

  onSubmit(): void {
    this.user.id = 1;

    if (this.addressForm.controls['name'].value) {
      this.user.name = this.addressForm.controls['name'].value;
    }

    if (this.addressForm.controls['email'].value) {
      this.user.email = this.addressForm.controls['email'].value;
    }

    if (this.addressForm.controls['phone'].value) {
      this.user.phone = this.addressForm.controls['phone'].value;
    }

    if (this.addressForm.controls['password'].value) {
      this.user.password = this.addressForm.controls['password'].value;
    }

    alert('Edited successful!');

    console.log(this.user);

    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
