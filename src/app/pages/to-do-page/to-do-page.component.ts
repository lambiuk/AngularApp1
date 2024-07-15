import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-to-do-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.scss',
})
export class ToDoPageComponent {}
