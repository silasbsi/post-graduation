import { Component, OnInit } from '@angular/core';
import studentsData from '../../students.json';
import { NgFor } from '@angular/common';

interface Students {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-handling-json',
  standalone: true,
  imports: [NgFor],
  templateUrl: './handling-json.component.html',
  styleUrl: './handling-json.component.css',
})
export class HandlingJsonComponent implements OnInit {
  students: Students[] = studentsData;

  constructor() {}

  ngOnInit(): void {
    console.log(this.students);
  }
}
