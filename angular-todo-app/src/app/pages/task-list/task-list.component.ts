import { Component, inject } from '@angular/core';

import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  // Inyectas el servicio usando la API moderna
  private taskService = inject(TaskService);

  // Accedes a la signal readonly que expone las tareas
  tasks = this.taskService.tasks;

  // Método para pruebas que agrega una tarea simulada
  addFakeTask() {
    this.taskService.addTask({ title: 'Nueva tarea', completed: false });
  }
}
