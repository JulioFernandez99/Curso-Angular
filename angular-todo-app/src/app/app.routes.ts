import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskListComponent } from './pages/task-list/task-list.component'; // 👈 importa el nuevo componente

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TaskListComponent }
    ]
  }
];
