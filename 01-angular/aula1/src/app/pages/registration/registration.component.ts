import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { User } from '../../models/user';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { GenericValidator } from '../../common/validator';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder, private service: UserService) {}

  user: User = new User();

  addressForm = this.fb.group({
    name: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(70),
      ]),
    ],
    email: [null, Validators.required],
    cpf: [
      '',
      Validators.compose([Validators.required, GenericValidator.isValidCPF()]),
    ],
    phone: [null, Validators.required],
    password: [null, Validators.required],
  });

  email = this.addressForm.controls['email'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    return this.email.hasError('email')
      ? 'You need to fill in a valid value for the email'
      : '';
  }

  onSubmit(): void {
    if (this.addressForm.controls['name'].value) {
      this.user.name = this.addressForm.controls['name'].value;
    }

    if (this.addressForm.controls['email'].value) {
      this.user.email = this.addressForm.controls['email'].value;
    }

    if (this.addressForm.controls['phone'].value) {
      this.user.phone = this.addressForm.controls['phone'].value;
    }

    if (this.addressForm.controls['cpf'].value) {
      this.user.cpf = this.addressForm.controls['cpf'].value;
    }

    if (this.addressForm.controls['password'].value) {
      this.user.password = this.addressForm.controls['password'].value;
    }

    console.log(this.user);

    //localStorage.setItem('user', JSON.stringify(this.user));

    this.service.addUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        alert('Data registered successfully');
      },
      error: (error: any) => {
        console.log(error);
        alert('An error has occurred');
      },
    });
  }
}
