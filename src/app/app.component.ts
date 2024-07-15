import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopNavComponent,
    ToDoPageComponent,
    ToDoListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularApp1';
}
