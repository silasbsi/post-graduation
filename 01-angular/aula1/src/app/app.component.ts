import { Component } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aula1';
}
