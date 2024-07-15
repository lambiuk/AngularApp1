import { Routes } from '@angular/router';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomePageComponent },
  { path: 'to-dos', title: 'To Do List', component: ToDoPageComponent },
  { path: '**', title: 'Not Found', component: PageNotFoundComponent },
];
