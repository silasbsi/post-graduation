import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    let url: string = this.BASE_URL + user.id;

    return this.http.put<User>(url, user, httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    let url: string = this.BASE_URL + user.id;

    return this.http.delete<User>(url, httpOptions);
  }
}
