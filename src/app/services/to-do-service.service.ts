import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from '../models/to-do-item';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiUrl = 'https://localhost:7232/';

  constructor(private http: HttpClient) {}

  createToDo(toDo: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(this.apiUrl, toDo);
  }

  getAllToDos(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(this.apiUrl);
  }

  getToDoById(id: number): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.apiUrl}/${id}`);
  }

  updateToDo(id: number, toDo: ToDoItem): Observable<ToDoItem> {
    return this.http.put<ToDoItem>(`${this.apiUrl}/${id}`, toDo);
  }

  deleteToDo(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
