import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AuthorizationService } from '../../services/authorization.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
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
export class LoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    password: ['', Validators.required],
    email: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.email,
      ]),
    ],
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

  constructor(private authorizationService: AuthorizationService) {}

  checkLogin() {
    if (this.authorizationService.getLoginStatus()) {
      this.authorizationService.logout();
    } else {
      this.authorizationService.authorize();
    }
  }

  onSubmit(): void {
    this.checkLogin();
    alert('Thanks!');
  }
}
