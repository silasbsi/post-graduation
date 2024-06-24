import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  authorized: boolean = false;
  localStorage: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = this.document.defaultView?.localStorage;
  }

  authorize() {
    localStorage.setItem('login', 'yes');
  }

  logout() {
    localStorage.clear();
  }

  getLoginStatus() {
    return !!localStorage.getItem('login');
  }
}
