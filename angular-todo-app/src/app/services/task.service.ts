import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export type Task = {
  id?: number; // si usas IDs
  title: string;
  completed: boolean;
};



//* signal: crea un valor reactivo (como un estado interno).

//* computed: crea un valor derivado, que se actualiza automáticamente si cambia su dependencia (como tasksSignal).



@Injectable({ providedIn: 'root' })
export class TaskService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.API_URL}/tasks`;

  private tasksSignal = signal<Task[]>([]); //? almacen principal de tareas
  tasks = computed(() => this.tasksSignal()); //? computed() crea un valor de solo lectura derivado del signal.

  //? asi mantenemos la logica encapsulada en el servicio.
  
  constructor() {
    this.loadTasks();
  }

  private postTo(path: string, data: any) {
    return this.http.post(`${this.baseUrl}/${path}`, data);
  }

  loadTasks() {
    this.http.get<Task[]>(this.baseUrl).subscribe(data => {
      this.tasksSignal.set(data);
    });
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.baseUrl, task).subscribe(saved => {
      this.tasksSignal.update(tasks => [...tasks, saved]);
    });
  }

  toggleCompleted(task: Task) {
    const updated = { ...task, completed: !task.completed };
    return this.http.put(`${this.baseUrl}/${task.id}`, updated).subscribe(() => {
      this.tasksSignal.update(tasks =>
        tasks.map(t => (t.id === task.id ? updated : t))
      );
    });
  }

  deleteTask(task: Task) {
    return this.http.delete(`${this.baseUrl}/${task.id}`).subscribe(() => {
      this.tasksSignal.update(tasks => tasks.filter(t => t.id !== task.id));
    });
  }
}
