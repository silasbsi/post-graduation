import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
