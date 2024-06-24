import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: number = 0;
  phone: string = '';

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = +params['id'];
        console.log(this.id);
      }

      if (params['phone'] !== undefined) {
        this.phone = params['phone'];
        console.log(this.phone);
      }
    });
  }
}
