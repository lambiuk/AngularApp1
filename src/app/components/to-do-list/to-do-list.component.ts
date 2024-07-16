import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoService } from '../../services/to-do-service.service';
import { ToDoItem } from '../../models/to-do-item';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  toDos: ToDoItem[] = [];
  error: any;
  constructor(private toDoService: ToDoService) {
    this.toDoService
      .getAllToDos()
      .pipe(
        catchError((err) => {
          console.error('Error caught in subscribe:', err);
          this.error = err;
          return of([] as ToDoItem[]);
        })
      )
      .subscribe((toDos) => {
        console.warn('Got toDos:', toDos);
        this.toDos = toDos as ToDoItem[];
      });
  }
}
