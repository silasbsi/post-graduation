import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-simple-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './simple-list.component.html',
  styleUrl: './simple-list.component.css',
})
export class SimpleListComponent implements OnInit {
  constructor(private router: Router, public service: UserService) {}

  users: User[] = [];
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.service.getUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
      error: (error) => {
        console.log('Some error has occurred');
        console.error(error);
      },
    });
  }

  goToDetails(user: User) {
    this.router.navigate(['details', user.id, user.phone]);
  }
}
