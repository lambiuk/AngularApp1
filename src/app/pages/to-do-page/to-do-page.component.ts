import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from '../../components/to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-page',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.scss',
})
export class ToDoPageComponent {}
